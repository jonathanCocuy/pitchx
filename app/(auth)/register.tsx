import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import Logo from "../../assets/images/main-logo.png";

export default function Register() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isFocused, setIsFocused] = useState<string | null>(null);
  
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image source={Logo} style={styles.logoRegister} />
        <Text style={styles.title}>PitchX</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nombre de usuario</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={[styles.input, isFocused === "email" && styles.inputFocused]}
          placeholder="Email Address"
          placeholderTextColor="#86868b"
          onFocus={() => setIsFocused("email")}
          onBlur={() => setIsFocused(null)}
        />
        <TextInput
          style={[styles.input, isFocused === "password" && styles.inputFocused]}
          value={password}
          placeholder="Password"
          onChangeText={setPassword}
          placeholderTextColor="#86868b"
          onFocus={() => setIsFocused("password")}
          onBlur={() => setIsFocused(null)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 50,
  },

  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  title: {
    fontFamily: "Inter-Bold",
    fontSize: 32,
  },

  logoRegister: {
    width: 50,
    height: 50,
  },

  inputContainer: {
    gap: 12,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  label: {
    fontSize: 13,
    fontWeight: "500",
    color: "#86868b",
    fontFamily: "Inter-Regular",
  },
  input: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#d2d2d7",
    backgroundColor: "#ffffff",
    color: "#1d1d1f",
    width: "90%",
    fontFamily: "Inter-Regular",
  },
  password: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#d2d2d7",
    backgroundColor: "#ffffff",
    color: "#1d1d1f",
    width: "90%",
    fontFamily: "Inter-Regular",
  },


  inputFocused: {
    borderColor: "#0071e3",
    // Replicamos el "glow" en iOS con shadow y en Android con elevación sutil
    shadowColor: "#0071e3",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },
});
