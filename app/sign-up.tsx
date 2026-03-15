import { router } from "expo-router";
import React, { useState } from "react";
import { ActivityIndicator, Alert, Pressable, StyleSheet, Text, View, Image } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { useAuth } from "../hooks/AuthContext";
import { createUserProfile } from "../services/appwrite";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [school, setSchool] = useState("");
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const name = username.trim() || "Student";
      const currentAccount = await signUp(email, password, name);

      await createUserProfile(currentAccount.$id, {
        username: name,
        role: role.trim(),
        school: school.trim(),
      });
      
      router.replace(`/questionnare?name=${encodeURIComponent(name)}`);
    } catch (err: any) {
      console.error("Sign up error", err);
      Alert.alert("Sign up failed", err?.message || "Check your input");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoSmall}>
        <Image source={require("../assets/images/logo.png")} style={styles.logoImage} resizeMode="contain" />
      </View>

      <Text style={styles.h1}>Sign Up</Text>

      <CustomInput label="Email *" value={email} onChangeText={setEmail} placeholder="name@example.com" />
      <CustomInput label="Role *" value={role} onChangeText={setRole} placeholder="student / teacher ..." />
      <CustomInput label="UserName *" value={username} onChangeText={setUsername} placeholder="username" />
      <CustomInput label="Password *" value={password} onChangeText={setPassword} placeholder="********" secureTextEntry />
      <CustomInput label="School" value={school} onChangeText={setSchool} placeholder="School name" />

      <CustomButton
        title={loading ? "Signing up…" : "Sign Up"}
        onPress={handleSubmit}
        disabled={loading || !email.trim() || !password.trim()}
      />
      {loading && <ActivityIndicator style={{ marginTop: 10 }} />}

      <View style={styles.footerRow}>
        <Pressable onPress={() => router.push("/sign-in")}>
          <Text style={{ fontWeight: "800" }}>Sign in</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  logoSmall: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logoImage: {
    width: "70%",
    height: "70%",
  },
  h1: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  footerRow: {
    marginTop: 20,
    alignItems: "center",
  },
});