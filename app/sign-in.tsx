import { router } from "expo-router";
import React, { useState } from "react";
import { ActivityIndicator, Alert, Pressable, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { useAuth } from "../hooks/AuthContext";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();

  const handleSignIn = async () => {
    setLoading(true);
    try {
      await signIn(email, password);
    } catch (err: any) {
      console.error("Sign in error", err);
      Alert.alert("Sign in failed", err?.message || "Check email/password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoCircle}>
        <Text style={{ fontWeight: "800" }}>LOGO</Text>
      </View>

      <Text style={styles.h1}>Sign In</Text>

      <CustomInput label="Email" value={email} onChangeText={setEmail} placeholder="name@example.com" />
      <CustomInput label="Password" value={password} onChangeText={setPassword} placeholder="********" secureTextEntry />

      <CustomButton
        title={loading ? "Signing in…" : "Sign In"}
        onPress={handleSignIn}
        disabled={loading || !email.trim() || !password.trim()}
      />
      {loading && <ActivityIndicator style={{ marginTop: 10 }} />}

      <View style={styles.footerRow}>
        <Pressable onPress={() => router.push("/sign-up")}>
          <Text style={{ fontWeight: "800" }}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
}