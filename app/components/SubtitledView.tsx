import { View, Text, StyleSheet } from "react-native";

function SubtitledView() {
  return (
    <View>
      <Text style={styles.subtitle}>Reshal.luchman2@mtn.com</Text>
    </View>
  );
}

export default SubtitledView;

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold",
    color: "dimgray",
  },
});
