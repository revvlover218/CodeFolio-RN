import { Image, StyleSheet, useColorScheme } from "react-native";
import { Colors } from "@/assets/Colors/Colors";

function RoundedImageView() {
  const colorScheme = useColorScheme();
  const borderColor =
    colorScheme === "light"
      ? Colors.light.borderColor
      : Colors.dark.borderColor;
  return (
    <Image
      style={[styles.roundedImageStyle, { borderColor: borderColor }]}
      source={require("@/assets/images/profilePicture.jpg")}
    />
  );
}

export default RoundedImageView;

const styles = StyleSheet.create({
  roundedImageStyle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 5,
    marginBottom: 10,
  },
});
