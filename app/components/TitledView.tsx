import { Colors } from "@/assets/Colors/Colors";
import { View, Text, StyleSheet, useColorScheme } from "react-native";

interface Props {
  text: string;
}

const TitledView: React.FC<Props> = ({ text }) => {
  const colorScheme = useColorScheme();
  const textColor =
    colorScheme === "light" ? Colors.light.icon : Colors.dark.icon;
  return (
    <View>
      <Text style={[styles.title, { color: textColor }]}> {text}</Text>
    </View>
  );
};

export default TitledView;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 5,
  },
});
