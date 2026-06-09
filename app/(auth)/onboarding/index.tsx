import { DoneType } from "@/types/onboarding.type";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Dots from "react-native-dots-pagination";
import SlideOne from "./SlideOne";
import SlideThree from "./SlideThree";
import SlideTwo from "./SlideTwo";

export default function Onboarding({ onDone }: { onDone: DoneType }) {
  const router = useRouter();
  const flatListRef = useRef<FlatList>(null);
  const [currentPage, setCurrentPage] = useState(0);

  // Here, I can use height the same way
  const { width } = Dimensions.get("window");
  const nextScreen = () => {
    if (currentPage === slideScreens.length - 1) return onDone();
    flatListRef.current?.scrollToIndex({ index: currentPage + 1 });
  };

  // Missing explanation...
  const handleScroll = (e: any) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / width);
    setCurrentPage(index);
  };

  const slideScreens = [
    <SlideOne />,
    <SlideTwo />,
    <SlideThree onDone={onDone} />,
  ];

  function redirectRegister() {
    router.push("/(auth)/login");
  }

  return (
    <View style={styles.slideContainer}>
      <FlatList
        // Missing explanation...
        ref={flatListRef}
        data={slideScreens}
        // This renderItem is used like a .map()
        renderItem={({ item }) => <View style={{ width }}>{item}</View>}
        horizontal
        // This is a complete animation to scroll, when I scroll horizontal, stop in the next screen
        pagingEnabled
        keyExtractor={(_, i) => String(i)}
        onScroll={handleScroll}
      />
      <View style={styles.dotsContainer}>
        <Dots length={3} active={currentPage} activeColor="#a688fd" />
      </View>
      <View>
        <TouchableOpacity
          onPress={currentPage < 2 ? nextScreen : redirectRegister}
          style={styles.nextButton}
        >
          {currentPage < 2 ? (
            <Ionicons name="arrow-forward-outline" size={32} color="#FFF" />
          ) : (
            <Text style={styles.createAccount}>Create Account</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slideContainer: { flex: 1 },

  dotsContainer: {
    position: "absolute",
    left: 20,
    bottom: 60,
  },

  nextButton: {
    position: "absolute",
    right: 20,
    bottom: 50,
    padding: 12,
    borderWidth: 2,
    borderRadius: 50,
    borderStyle: "solid",
    borderColor: "#a688fd",
    backgroundColor: "#a688fd",
  },

  createAccount: {
    fontFamily: "Inter-Bold",
    letterSpacing: -0.3,
    fontSize: 16,
    color: "#FFF",
  },
});
