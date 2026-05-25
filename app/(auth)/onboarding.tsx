import { Image, StyleSheet, Text, View } from "react-native";
import Logo from "../../assets/images/main-logo.png";

export default function onboarding() {
  return (
    <View style={styles.container}>
      <View style={styles.sectionLogo}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.titlelogo}>PitchX</Text>
      </View>
      <View style={styles.sectionInfo}>
        <Text style={styles.title}>Elevate Your Training</Text>
        <Text style={styles.text}>
          Plan professional soccer sessions, manage categories, and unlock your
          team's maximum potential from one place.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 10,
  },

  sectionLogo: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  titlelogo: {
    fontFamily: "Inter-Bold",
    letterSpacing: -0.3,
    color: "#fff",
    fontSize: 49,
  },

  sectionInfo: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  title: {
    color: "#fff",
    fontSize: 40,
    paddingLeft: 16,
    paddingRight: 16,
    textAlign: "center",
    fontFamily: "Inter-Bold",
    letterSpacing: -0.3,
  },

  text: {
    fontFamily: "Inter-Regular",
    color: "#fff",
    letterSpacing: -0.3,
    fontSize: 20,
    textAlign: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },

  logo: {
    width: 150,
    height: 150,
  },
});
