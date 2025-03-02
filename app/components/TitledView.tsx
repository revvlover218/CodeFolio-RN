import { View, Text, StyleSheet } from "react-native";

function TitledView() {
  return (
    <View>
      <Text style={styles.title}>Reshal Luchman</Text>
    </View>
  );
}

export default TitledView;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 5,
  },
});
