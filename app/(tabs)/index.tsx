import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Colors } from "@/assets/Colors/Colors";
import { useColorScheme } from "react-native";
import ProfilePictureView from "../components/ProfilePictureView";
import DescriptionView from "../components/DescriptionView";
import ActionButton from "../components/ActionButton";
import { Link } from "expo-router";

export default function Tab() {
  const colorScheme = useColorScheme();
  const viewBackgroundColor =
    colorScheme === "light" ? Colors.light.background : Colors.dark.background;

  return (
    <View style={[styles.container, { backgroundColor: viewBackgroundColor }]}>
      <ScrollView>
        <ProfilePictureView></ProfilePictureView>
        <DescriptionView></DescriptionView>
      </ScrollView>
      <Link href={"/(tabs)/languages"}>
        <ActionButton />
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
