import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StyleSheet, View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function AuthLayout() {
  return (
    <View style={styles.container}>
      <Stack>
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="register" options={{ headerShown: false }} />
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
