import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef } from 'react';
import { Animated, ImageBackground, StyleSheet, Text, View } from "react-native";
import ImageBG from "../../../assets/images/bg-one.png";
import Logo from "../../../assets/images/pitch-3d.png";

export default function SlideOne() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const title = "PitchX";

  return (
    <View style={styles.mainContainer}>
      <ImageBackground 
        source={ImageBG} 
        resizeMode="cover" 
        style={StyleSheet.absoluteFill}
      >
        <LinearGradient
          colors={["rgba(22, 0, 59, 0.85)", "rgba(92, 29, 186, 0.9)", "#000000"]}
          style={StyleSheet.absoluteFill}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        />

        <View style={styles.contentContainer}>
          <View style={styles.logoSection}>
            <Animated.Image 
              source={Logo} 
              style={[styles.logo, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}
            />
            <Text style={styles.logoTitle}>{title}</Text>
          </View>
          
          <Text style={styles.text}>
            Forget lost attendance sheets and chaotic chats. Manage your training sessions, categories, and call-ups all in one place.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#2e0e67",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    paddingHorizontal: 20,
  },
  logoSection: {
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  logo: {
    width: 220,
    height: 220,
  },
  logoTitle: {
    fontSize: 36,
    color: "#fff",
    letterSpacing: -0.3,
    fontFamily: "Inter-Bold",
  },
  text: {
    fontSize: 18,
    color: "#fff",
    paddingHorizontal: 16,
    textAlign: "center",
    letterSpacing: -0.3,
    fontFamily: "Inter-Regular",
    lineHeight: 24, // Mejora la lectura del párrafo
  },
});