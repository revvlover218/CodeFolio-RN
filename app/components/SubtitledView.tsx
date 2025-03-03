import React from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";

interface Props {
  text: string;
}

const SubtitledView: React.FC<Props> = ({ text }) => {
  const colorScheme = useColorScheme();
  const textColor = colorScheme === "light" ? "dimgray" : "lightgray";
  return (
    <View>
      <Text style={[styles.subtitle, { color: textColor }]}>{text}</Text>
    </View>
  );
};

export default SubtitledView;

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold",
  },
});
