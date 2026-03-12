import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import CustomButton from "../../components/CustomButton";
import { account, getMe, getQuestionnaire, getUserProfile } from "../../services/appwrite";

export default function Profile() {
 const [name, setName] = useState("Student");
 const [email, setEmail] = useState<string>("-");
 const [userId, setUserId] = useState<string>("");
 const [profileDoc, setProfileDoc] = useState<any>(null);
 const [questionnaire, setQuestionnaire] = useState<any>(null);

 useEffect(() => {
  const loadUser = async () => {
    const me = await getMe();
    if (!me) {
      // Immediately redirect if no user
      router.replace("/sign-in");
      return;
    }
    setName(me.name || "Student");
    setEmail(me.email || "-");
    setUserId(me.$id);

    // fetch profile and questionnaire data
    const prof = await getUserProfile(me.$id);
    setProfileDoc(prof);
    const q = await getQuestionnaire(me.$id);
    setQuestionnaire(q);
  };
  
  loadUser();
}, []);

// Don't render profile if no userId cus why would we right?? 
if (!userId) {
  return null; // or loading spinner
}

 const signOut = async () => {
   try {
     await account.deleteSession("current");
     router.replace("/sign-in");
   } catch (e) {
     console.error(e);
     Alert.alert("Error", "Could not sign out.");
   }
 };

 return (
   <View style={styles.container}>
     <Text style={styles.h1}>Profile</Text>

     <Text style={styles.line}>Name: {name}</Text>
     <Text style={styles.line}>Email: {email}</Text>
     <Text style={styles.line}>User ID: {userId}</Text>

     <View style={{ marginTop: 18 }}>
       <Text style={styles.menu} onPress={() => router.push('/personal-details')}>
         • Personal Information
       </Text>
       <Text style={styles.menu}>• Notifications</Text>
       <Text style={styles.menu}>• Wishlist</Text>
       <Text style={styles.menu}>• Saved</Text>
       <Text style={styles.menu}>• Settings</Text>
     </View>

     <CustomButton title="Sign Out" onPress={signOut} />
   </View>
 );
}

const styles = StyleSheet.create({
 container: { flex: 1, padding: 22, paddingTop: 60, backgroundColor: "#fff" },
 h1: { fontSize: 28, fontWeight: "900", marginBottom: 14 },
 line: { marginTop: 6, color: "#333" },
 menu: { marginTop: 10, fontWeight: "700" },
});
