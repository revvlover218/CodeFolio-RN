import { View, StyleSheet, ScrollView } from "react-native";
import { useColorScheme } from "react-native";
import { Link } from "expo-router";
import { useRef } from "react";
import { useScrollToTop } from "@react-navigation/native";

import PrimaryLocationView from "../components/PrimaryLocationView";
import ProfilePictureView from "../components/ProfilePictureView";
import DescriptionView from "../components/DescriptionView";
import ActionButton from "../components/ActionButton";
import Colors from "@/assets/Colors/Colors";
import Localize from "../utils/Localize";

export default function Tab() {
  const colorScheme = useColorScheme();
  const viewBackgroundColor =
    colorScheme === "light"
      ? Colors.light.secondaryBackground
      : Colors.dark.secondaryBackground;

  // Scroll view reference
  const scrollRef = useRef<ScrollView>(null);
  useScrollToTop(scrollRef);

  return (
    <View style={[styles.container, { backgroundColor: viewBackgroundColor }]}>
      <ScrollView ref={scrollRef}>
        <ProfilePictureView></ProfilePictureView>
        <DescriptionView></DescriptionView>
        <PrimaryLocationView />
      </ScrollView>
      <Link href={"/(tabs)/languages"} asChild>
        <ActionButton text={Localize.goToLanguagesTitle} />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  profilePictureStyle: {
    flex: 1,
  },
});
