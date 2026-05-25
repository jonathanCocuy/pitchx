import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Logo from "../../assets/images/main-logo.png";

export default function OnboardingScreen() {
  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        colors={["#2e0e67", "#5c1dba", "#000000"]}
        style={StyleSheet.absoluteFill}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
      <View style={styles.sectionLogo}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.titleLogo}> PitchX </Text>
      </View>
      <Text style={styles.text}>
        Plan professional soccer sessions, manage categories, and unlock your
        team's maximum potential from one place.
      </Text>
      <Pressable
        onPress={() => console.log("Botón presionado")}
        style={styles.buttonNext}
      >
        <Ionicons name="arrow-forward-outline" size={32} color="#a688fd" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: "100%",
    backgroundColor: "#6c21dc",
  },

  sectionLogo: {
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  logo: {
    width: 120,
    height: 120,
  },

  titleLogo: {
    fontSize: 36,
    color: "#fff",
    letterSpacing: -0.3,
    fontFamily: "Inter-Bold",
  },

  text: {
    fontSize: 18,
    color: "#fff",
    paddingLeft: 16,
    paddingRight: 16,
    textAlign: "center",
    letterSpacing: -0.3,
    fontFamily: "Inter-Regular",
  },

  buttonNext: {
    position: "absolute",
    right: 20,
    bottom: 20,
    padding: 12,
    borderWidth: 2,
    borderRadius: 50,
    borderStyle: "solid",
    borderColor: "#a688fd",
    backgroundColor: "#fff",
  },
});
