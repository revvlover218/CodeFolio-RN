import { View, Text, StyleSheet } from "react-native";

function TiledView(content) {
  return (
    <View>
      <View style={styles.roundedIcon}></View>
      <View>
        <Text>{content.name}</Text>
      </View>
    </View>
  );
}

export default TiledView;

const styles = StyleSheet.create({
  container: {},
  roundedIcon: {
    backgroundColor: "purple",
    width: 75,
    height: 75,
    borderRadius: 10,
  },
  title: {},
});
