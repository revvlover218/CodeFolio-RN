import { View, Text, StyleSheet } from "react-native";

function HeadingView() {
  return (
    <View style={styles.titleView}>
      <Text style={styles.title}>This is a test</Text>
    </View>
  );
}

export default HeadingView;

const styles = StyleSheet.create({
  titleView: { marginBottom: 5 },
  title: {
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 5,
  },
});
