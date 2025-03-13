import { StyleSheet, useColorScheme, View } from "react-native";

const DividerLineView = () => {
  const colorScheme = useColorScheme();
  const backgroundColor = colorScheme === "light" ? "dimgray" : "lightgray";
  return <View style={[styles.line, { backgroundColor: backgroundColor }]} />;
};

export default DividerLineView;

const styles = StyleSheet.create({
  line: {
    height: 1,
    marginHorizontal: 50,
  },
});
