import { Image, StyleSheet, useColorScheme, View } from "react-native";
import { Colors } from "@/assets/Colors/Colors";

function RoundedImageView() {
  const colorScheme = useColorScheme();
  const borderColor =
    colorScheme === "light"
      ? Colors.light.buttonBackground
      : Colors.dark.buttonBackground;
  return (
    <View style={styles.container}>
      <Image
        style={[styles.roundedImageStyle, { borderColor: borderColor }]}
        source={require("@/assets/images/profilePicture.jpg")}
      />
    </View>
  );
}

export default RoundedImageView;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  roundedImageStyle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 5,
  },
});
