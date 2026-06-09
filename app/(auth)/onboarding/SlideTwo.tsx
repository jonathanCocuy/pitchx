import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef } from 'react';
import { Animated, ImageBackground, StyleSheet, Text, View } from "react-native";
import ImageBG from "../../../assets/images/bg-two.png";
import Pitch from "../../../assets/images/pitchx.png";

export default function SlideTwo() {
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

  const title = "Plan like a pro";

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
          <Text style={styles.logoTitle}>{title}</Text>
          <View style={styles.logoSection}>
            <Animated.Image 
              source={Pitch} 
              style={[styles.logo, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}
            />
          </View>
          
          <Text style={styles.text}>
          Design dynamic training sessions, track your players' performance, and prepare for each match with advanced tactical tools.
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
    width: 350,
    height: 350,
  },
  logoTitle: {
    fontSize: 36,
    color: "#fff",
    letterSpacing: -0.3,
    fontFamily: "Inter-Bold",
    textAlign: "left",
    width: "100%"
  },
  text: {
    fontSize: 16,
    color: "#fff",
    paddingHorizontal: 16,
    textAlign: "left",
    letterSpacing: -0.3,
    fontFamily: "Inter-Medium",
    lineHeight: 24,
  },
});