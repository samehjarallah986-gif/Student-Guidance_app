import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Alert, FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";
import ActivityCard from "../../components/ActivityCard";
import { activities, type Activity } from "../../data/activities";
import {
  COL_SAVED,
  DB_ID,
  Query,
  databases,
  getMe,
} from "../../services/appwrite";

type SavedDoc = {
  $id: string;
  userId: string;
  itemType: string;
  itemId: string;
};

export default function Saved() {
  const [savedDocs, setSavedDocs] = useState<SavedDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadSaved = async () => {
    try {
      const me = await getMe();

      if (!me) {
        setSavedDocs([]);
        setLoading(false);
        return;
      }

      const res = await databases.listDocuments(DB_ID, COL_SAVED, [
        Query.equal("userId", me.$id),
        Query.equal("itemType", "activity"),
        Query.limit(200),
      ]);

      setSavedDocs(res.documents as unknown as SavedDoc[]);
    } catch (e: any) {
      // Unauthorized here usually means collection permissions are not configured yet.
      if (e?.code === 401 || e?.code === 403) {
        setSavedDocs([]);
        return;
      }
      console.error(e);
      Alert.alert("Error", "Failed to load saved items.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSaved();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await loadSaved();
    setRefreshing(false);
  };

  const savedItems: Activity[] = savedDocs
    .map((doc) => activities.find((a) => a.id === doc.itemId))
    .filter(Boolean) as Activity[];
    
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Saved</Text>

      {loading ? (
        <Text style={{ marginTop: 12 }}>Loading...</Text>
      ) : (
        <>
          <Text style={styles.sub}>
            You have saved {savedItems.length} items
          </Text>

          <FlatList
            data={savedItems}
            keyExtractor={(item) => item.id}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            renderItem={({ item }) => (
              <ActivityCard
                item={item}
                isSaved
                onPress={() => router.push(`/detail?id=${item.id}`)}
              />
            )}
            ListEmptyComponent={
              <Text style={{ marginTop: 12 }}>No saved items yet.</Text>
            }
            contentContainerStyle={{ paddingBottom: 40 }}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 22, paddingTop: 60, backgroundColor: "#e2f5ff" },
  h1: { fontSize: 28, fontFamily: 'Poppins_700Bold', color: '#203b60' },
  sub: { marginTop: 6, marginBottom: 14, fontFamily: 'Inter_400Regular', color: '#107c8f' },
});