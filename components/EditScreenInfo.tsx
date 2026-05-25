import { StyleSheet } from "react-native";
import { Text, View } from "./Themed";

export default function EditScreenInfo() {
  return (
    <View style={styles.container}>
      <Text>Screen Tab One</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
