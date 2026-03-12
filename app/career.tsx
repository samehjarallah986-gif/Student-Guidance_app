import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { careers } from "../data/careers";

export default function CareerDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const career = careers.find((c) => c.id === String(id));

  if (!career) {
    return (
      <View style={styles.container}>
        <Text>Career not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 22 }}>
      <Text style={styles.title}>{career.title}</Text>
      <Text style={styles.label}>Description</Text>
      <Text style={styles.value}>{career.description}</Text>

      <Text style={styles.label}>Required Education</Text>
      {career.requiredEducation.map((e) => (
        <Text key={e} style={styles.value}>
          • {e}
        </Text>
      ))}

      <Text style={styles.label}>Required Skills</Text>
      {career.requiredSkills.map((s) => (
        <Text key={s} style={styles.value}>
          • {s}
        </Text>
      ))}

      <Text style={styles.label}>Recommended High School Subjects</Text>
      {career.recommendedHighSchoolSubjects.map((s) => (
        <Text key={s} style={styles.value}>
          • {s}
        </Text>
      ))}

      <Text style={styles.label}>Salary Range</Text>
      <Text style={styles.value}>{career.salaryRange}</Text>

      <Text style={styles.label}>Work Environment</Text>
      <Text style={styles.value}>{career.workEnvironment}</Text>

      <Text style={styles.label}>Future Demand</Text>
      <Text style={styles.value}>{career.futureDemand}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  title: { fontSize: 28, fontWeight: "900", marginBottom: 16 },
  label: { fontWeight: "900", marginTop: 12 },
  value: { color: "#333", marginTop: 4 },
});