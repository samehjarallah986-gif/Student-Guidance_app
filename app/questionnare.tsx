import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Alert, ScrollView, StyleSheet, Text } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { COL_QUESTIONNAIRES, DB_ID, ID, databases, getMe, getQuestionnaire } from "../services/appwrite";

export default function Questionnaire() {
  const [majors, setMajors] = useState("");
  const [careerInMind, setCareerInMind] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [parentsJobs, setParentsJobs] = useState("");
  const [daysJob, setDaysJob] = useState("");
  const [volunteerInterest, setVolunteerInterest] = useState("");
  const [psychometricGrade, setPsychometricGrade] = useState("");

  // redirect to sign-in immediately if there is no valid session
  // or jump to tabs if questionnaire already exists
  useEffect(() => {
    (async () => {
      // guard; wait a moment in case session is establishing
      let me = null as any;
      for (let i = 0; i < 5; i++) {
        me = await getMe();
        if (me) break;
        await new Promise((r) => setTimeout(r, 200));
      }
      if (!me) {
        router.replace("/sign-in");
        return;
      }
      const q = await getQuestionnaire(me.$id);
      if (q) {
        router.replace("/(tabs)");
      }
    })();
  }, []);

  const continueFlow = async () => {
    try {
      const me = await getMe();
      if (!me) {
        Alert.alert("Not signed in", "Please sign in again.");
        router.replace("/sign-in");
        return;
      }

      await databases.createDocument(DB_ID, COL_QUESTIONNAIRES, ID.unique(), {
        userId: me.$id,
        majors,
        careerInMind,
        hobbies,
        parentsJobs,
        daysjob: daysJob,
        volunteerInterest,
        psychometricGrade,
      });
      router.replace("/(tabs)");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Could not save questionnaire.");
    }
  };


  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#fff" }}
      contentContainerStyle={styles.container}
    >
      <Text style={styles.h1}>Questionnaire</Text>

      <CustomInput value={majors} onChangeText={setMajors} placeholder="Majors" />
      <CustomInput value={careerInMind} onChangeText={setCareerInMind} placeholder="Career in mind" />
      <CustomInput value={hobbies} onChangeText={setHobbies} placeholder="Hobbies" />
      <CustomInput value={parentsJobs} onChangeText={setParentsJobs} placeholder="Parents jobs" />
      <CustomInput value={daysJob} onChangeText={setDaysJob} placeholder="Dream job day" />
      <CustomInput value={volunteerInterest} onChangeText={setVolunteerInterest} placeholder="Volunteering interest" />
      <CustomInput value={psychometricGrade} onChangeText={setPsychometricGrade} placeholder="Psychometric grade" />

      <CustomButton title="Continue" onPress={continueFlow} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 22, paddingTop: 60 },
  h1: { fontSize: 28, fontWeight: "900", marginBottom: 20 },
});