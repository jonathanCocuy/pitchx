import Logo from "@assets/images/main-logo.png";
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.title}></Text>
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
  titleContainer: {},
  logo: {},
  title: {},
  inputContainer: {},
  input: {},
  inputEmail: {},
  inputPassword: {},
  button: {},
});
