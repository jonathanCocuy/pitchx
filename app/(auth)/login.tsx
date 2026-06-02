import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import Logo from "../../assets/images/main-logo.png";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.title}>PitchX</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.inputEmail, styles.input]}
          placeholder="Email Address"
        />
        <TextInput
          style={[styles.inputPassword, styles.input]}
          placeholder="Password"
        />
        <TouchableOpacity style={styles.button}></TouchableOpacity>
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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
  },

  logo: {
    width: 50,
    height: 50,
  },

  title: {
    fontFamily: "Inter-Bold",
    letterSpacing: -0.3,
    fontSize: 32,
    color: "#fff",
  },

  inputContainer: {},

  input: {
    fontFamily: "Inter-Regular",
    fontSize: 20,
    color: "#fff",
  },

  inputEmail: {},

  inputPassword: {},

  button: {},
});
