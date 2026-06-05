import { Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Logo from "../../assets/images/main-logo.png";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isFocused, setIsFocused] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image source={Logo} style={styles.logoLogin} />
        <Text style={styles.title}>PitchX</Text>
      </View>

      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeTitle}>Welcome Back</Text>
        <Text style={styles.welcomeSubtitle}>Sign in to continue</Text>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={[styles.input, isFocused === "email" && styles.inputFocused]}
            placeholder="Enter your email"
            placeholderTextColor="#86868b"
            onFocus={() => setIsFocused("email")}
            onBlur={() => setIsFocused(null)}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <View style={[styles.passwordWrapper, { borderColor: isFocused === "password" ? "#6c21dc" : "#d2d2d7" }]}>
            <TextInput
              style={styles.passwordInputPuro}
              value={password}
              placeholder="Enter your password"
              onChangeText={setPassword}
              placeholderTextColor="#86868b"
              onFocus={() => setIsFocused("password")}
              onBlur={() => setIsFocused(null)}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TouchableOpacity
              style={styles.eyeButtonPuro}
              onPress={() => setShowPassword(!showPassword)}
              activeOpacity={0.7}
            >
              <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={20}
                color="#6c21dc"
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.forgotContainer} activeOpacity={0.7}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Or</Text>
          <View style={styles.dividerLine} />
        </View>

        <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-google" size={20} color="#1d1d1f" />
            <Text style={styles.socialButtonText}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-apple" size={20} color="#1d1d1f" />
            <Text style={styles.socialButtonText}>Apple</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signUpRedirectContainer}>
          <Text style={styles.redirectText}>Don't have an account? </Text>
          <TouchableOpacity 
            activeOpacity={0.7} 
            onPress={() => router.push("/register")}
          >
            <Text style={styles.redirectLink}>Sign up</Text>
          </TouchableOpacity>
        </View>
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
    gap: 10,
    backgroundColor: "#F9F9F9"
  },

  titleContainer: {
    position: "absolute",
    top: 40,
    left: 0,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 16,
    gap: 8,
    width: "100%",
  },
  logoLogin: {
    width: 35,
    height: 35,
  },
  title: {
    fontFamily: "Inter-Bold",
    fontSize: 20,
    letterSpacing: -0.5,
  },

  welcomeContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginTop: 20,
  },
  welcomeTitle: {
    fontFamily: "Inter-Bold",
    fontSize: 30,
    letterSpacing: -0.5,
  },
  welcomeSubtitle: {
    fontFamily: "Inter-Regular",
    fontSize: 13,
    color: "#86868b",
  },

  inputContainer: {
    width: "95%",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 16,
    gap: 16,
  },

  inputGroup: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 4,
  },
  label: {
    fontSize: 14,
    color: "#000",
    fontFamily: "Inter-Medium",
    letterSpacing: -0.5,
    paddingLeft: 4,
  },
  input: {
    fontSize: 13,
    height: 50,
    paddingHorizontal: 16,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#d2d2d7",
    backgroundColor: "#ffffff",
    color: "#1d1d1f",
    width: "100%",
    fontFamily: "Inter-Regular",
  },
  inputFocused: {
    borderColor: "#6c21dc",
    shadowColor: "#6c21dc",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },

  passwordWrapper: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    paddingHorizontal: 16,
    borderRadius: 50,
    borderWidth: 1,
    backgroundColor: "#ffffff",
    width: "100%",
  },
  passwordInputPuro: {
    flex: 1,
    fontSize: 13,
    color: "#1d1d1f",
    fontFamily: "Inter-Regular",
    height: "100%",
    padding: 0,
  },
  eyeButtonPuro: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    paddingLeft: 8,
  },

  forgotContainer: {
    width: "100%",
    alignItems: "flex-end",
    marginTop: -4,
    paddingRight: 4,
  },
  forgotText: {
    fontFamily: "Inter-Medium",
    fontSize: 13,
    color: "#6c21dc",
  },

  button: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 50,
    backgroundColor: "#6c21dc",
    marginTop: 8,
  },
  buttonText: {
    fontSize: 16,
    color: "#ffffff",
    fontFamily: "Inter-Medium",
    letterSpacing: -0.5,
    textAlign: "center",
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#e5e5ea",
  },
  dividerText: {
    fontFamily: "Inter-Regular",
    fontSize: 13,
    color: "#86868b",
    paddingHorizontal: 10,
  },

  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: 12,
  },
  socialButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#d2d2d7",
    backgroundColor: "#ffffff",
    gap: 8,
  },
  socialButtonText: {
    fontFamily: "Inter-Medium",
    fontSize: 14,
    color: "#1d1d1f",
    letterSpacing: -0.3,
  },
  googleIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },

  signUpRedirectContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  redirectText: {
    fontFamily: "Inter-Regular",
    fontSize: 14,
    color: "#86868b",
  },
  redirectLink: {
    fontFamily: "Inter-SemiBold",
    fontSize: 14,
    color: "#6c21dc",
  },
});