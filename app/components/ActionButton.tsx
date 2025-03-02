import {
  View,
  Text,
  Pressable,
  StyleSheet,
  useColorScheme,
  Dimensions,
} from "react-native";
import { Colors } from "@/assets/Colors/Colors";

function ActionButton({ onPress }) {
  const colorScheme = useColorScheme();
  const backgroundColor =
    colorScheme === "light"
      ? Colors.light.borderColor
      : Colors.dark.borderColor;
  return (
    <View style={[styles.container]}>
      <Pressable onPress={onPress}>
        <View
          style={[
            styles.buttonBackground,
            { backgroundColor: backgroundColor },
          ]}
        >
          <Text style={styles.buttonText}>Go to languages</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default ActionButton;

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
  },
  buttonBackground: {
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    color: "white",
  },
  pressed: {
    opacity: 0.75,
  },
});
