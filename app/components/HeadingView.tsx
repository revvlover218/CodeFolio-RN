import { Colors } from "@/assets/Colors/Colors";
import { View, Text, StyleSheet, useColorScheme } from "react-native";

type Props = {
  text: String;
};

const HeadingView: React.FC<Props> = ({ text }) => {
  const colorScheme = useColorScheme();
  const textColor =
    colorScheme === "light" ? Colors.light.icon : Colors.dark.icon;
  return (
    <View style={styles.titleView}>
      <Text style={[styles.title, { color: textColor }]}>{text}</Text>
    </View>
  );
};

export default HeadingView;

const styles = StyleSheet.create({
  titleView: { marginBottom: 5 },
  title: {
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 5,
  },
});
