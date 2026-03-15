import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { getMe, getQuestionnaire, getUserProfile } from "../services/appwrite";

export default function PersonalDetails() {
  const [profile, setProfile] = useState<any>(null);
  const [questionnaire, setQuestionnaire] = useState<any>(null);
  const [me, setMe] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const user = await getMe();
      if (!user) {
        router.replace("/sign-in");
        return;
      }
      setMe(user);

      const prof = await getUserProfile(user.$id);
      setProfile(prof);
      const q = await getQuestionnaire(user.$id);
      setQuestionnaire(q);
    })();
  }, []);

  if (!me) {
    return null; // or loading indicator
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 22 }}>
      <Text style={styles.h1}>Personal Information</Text>
      <Text style={styles.field}>Name: {me.name}</Text>
      <Text style={styles.field}>Email: {me.email}</Text>
      {profile && (
        <>
          <Text style={styles.field}>Role: {profile.role || "-"}</Text>
          <Text style={styles.field}>School: {profile.school || "-"}</Text>
          {/* other profile fields if needed */}
        </>
      )}

      {questionnaire && (
        <>
          <Text style={styles.h2}>Questionnaire Answers</Text>
          <Text style={styles.field}>Majors: {questionnaire.majors}</Text>
          <Text style={styles.field}>Career in Mind: {questionnaire.careerInMind}</Text>
          <Text style={styles.field}>Hobbies: {questionnaire.hobbies}</Text>
          <Text style={styles.field}>Parents' Jobs: {questionnaire.parentsJobs}</Text>
          <Text style={styles.field}>Dream Job Day: {questionnaire.daysjob}</Text>
          <Text style={styles.field}>Volunteer Interest: {questionnaire.volunteerInterest}</Text>
          <Text style={styles.field}>Psychometric Grade: {questionnaire.psychometricGrade}</Text>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#e2f5ff" },
  h1: { fontSize: 28, fontFamily: 'Poppins_700Bold', color: '#203b60', marginBottom: 16 },
  h2: { fontSize: 22, fontFamily: 'Poppins_700Bold', color: '#203b60', marginTop: 20, marginBottom: 8 },
  field: { marginVertical: 4, fontFamily: 'Inter_400Regular', color: '#107c8f' },
});