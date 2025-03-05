import {
  View,
  Text,
  Pressable,
  StyleSheet,
  useColorScheme,
  GestureResponderEvent,
} from "react-native";
import React, { forwardRef } from "react";

import Colors from "@/assets/Colors/Colors";

interface Props {
  text: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const ActionButton = forwardRef<View, Props>(({ text, onPress }, ref) => {
  const colorScheme = useColorScheme();
  const backgroundColor =
    colorScheme === "light"
      ? Colors.light.buttonBackground
      : Colors.dark.buttonBackground;
  return (
    <View style={[styles.container]}>
      <Pressable
        style={({ pressed }) => [{ opacity: pressed ? 0.9 : 1 }]}
        onPress={onPress}
        ref={ref}
      >
        <View
          style={[
            styles.buttonBackground,
            { backgroundColor: backgroundColor },
          ]}
        >
          <Text style={styles.buttonText}>{text}</Text>
        </View>
      </Pressable>
    </View>
  );
});

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
});
