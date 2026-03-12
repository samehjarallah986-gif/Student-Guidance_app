import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { getMe } from "../../services/appwrite";

export default function Home() {
 const [name, setName] = useState<string>("Student");
 const [query, setQuery] = useState("");

 useEffect(() => {
   (async () => {
     const me = await getMe();
     if (me?.name) setName(me.name);
   })();
 }, []);

 return (
   <View style={styles.container}>
     <Text style={styles.h1}>
       Hi {name},{"\n"}what would you{"\n"}like to do next?
     </Text>

     <CustomInput value={query} onChangeText={setQuery} placeholder="Search activities or careers" />

     <CustomButton
       title="Search"
       onPress={() => router.push(`/results?query=${encodeURIComponent(query)}`)}
     />
   </View>
 );
}

const styles = StyleSheet.create({
 container: { flex: 1, padding: 22, paddingTop: 70, backgroundColor: "#fff" },
 h1: { fontSize: 28, fontWeight: "900", marginBottom: 18 },
});
