import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import { activities, type Activity } from "../data/activities";
import { COL_SAVED, DB_ID, ID, Query, databases, getMe } from "../services/appwrite";

type SavedDoc = {
  $id: string;
  userId: string;
  itemType: "activity";
  itemId: string;
};

export default function Detail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const activity = activities.find((item: Activity) => item.id === String(id));

  const [loading, setLoading] = useState(true);
  const [meId, setMeId] = useState<string | null>(null);
  const [savedDocId, setSavedDocId] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const me = await getMe();
        if (!me) {
          setMeId(null);
          setSavedDocId(null);
          setLoading(false);
          return;
        }

        setMeId(me.$id);

        if (!activity) {
          setLoading(false);
          return;
        }

        const res = await databases.listDocuments(DB_ID, COL_SAVED, [
          Query.equal("userId", me.$id),
          Query.equal("itemType", "activity"),
          Query.equal("itemId", activity.id),
          Query.limit(1),
        ]);

        const doc = res.documents?.[0] as unknown as SavedDoc | undefined;
        setSavedDocId(doc ? doc.$id : null);
      } catch (e) {
        console.error(e);
        Alert.alert("Error", "Failed to load save status.");
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  const saveActivity = async () => {
    if (!activity) return;

    const me = await getMe();
    if (!me) {
      Alert.alert("Not signed in", "Please sign in first.");
      return;
    }

    try {
      const res = await databases.listDocuments(DB_ID, COL_SAVED, [
        Query.equal("userId", me.$id),
        Query.equal("itemId", activity.id),
        Query.limit(1),
      ]);

      if (res.documents.length > 0) {
        const existing = res.documents[0] as unknown as SavedDoc;
        setSavedDocId(existing.$id);
        Alert.alert("Already saved", "This activity is already in Saved.");
        return;
      }

      const created = await databases.createDocument(DB_ID, COL_SAVED, ID.unique(), {
        userId: me.$id,
        itemType: "activity",
        itemId: activity.id,
      });

      setSavedDocId((created as any).$id);
      Alert.alert("Saved", "Added to your Saved list.");
    } catch (e) {
      console.error(e);
      Alert.alert("Error", "Could not save this activity.");
    }
  };

  const unsaveActivity = async () => {
    if (!savedDocId) return;

    try {
      await databases.deleteDocument(DB_ID, COL_SAVED, savedDocId);
      setSavedDocId(null);
      Alert.alert("Removed", "Removed from Saved.");
    } catch (e) {
      console.error(e);
      Alert.alert("Error", "Could not remove this activity.");
    }
  };

  if (!activity) {
    return (
      <View style={styles.container}>
        <Text>Activity not found</Text>
      </View>
    );
  }

  const isSaved = !!savedDocId;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activity Details</Text>

      <View style={styles.imgStub} />

      <Text style={styles.label}>Title</Text>
      <Text style={styles.value}>{activity.title}</Text>

      <Text style={styles.label}>Category</Text>
      <Text style={styles.value}>{activity.category}</Text>

      <Text style={styles.label}>Location</Text>
      <Text style={styles.value}>{activity.location}</Text>

      <Text style={styles.label}>Price</Text>
      <Text style={styles.value}>{activity.price}</Text>

      <Text style={styles.label}>Description</Text>
      <Text style={styles.value}>{activity.description}</Text>

      <CustomButton
        title={loading ? "Loading..." : isSaved ? "Unsave" : "Save"}
        onPress={isSaved ? unsaveActivity : saveActivity}
        disabled={loading || !meId}
      />

      <CustomButton title="Get Directions" onPress={() => {}} />
      <CustomButton title="Share" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 22, paddingTop: 60, backgroundColor: "#fff" },
  title: { fontSize: 18, fontWeight: "900", marginBottom: 12 },
  imgStub: {
    height: 160,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#111",
    backgroundColor: "#E0E0E0",
    marginBottom: 12,
  },
  label: { fontWeight: "900", marginTop: 8 },
  value: { color: "#333", marginTop: 2 },
});