import { View, Text, StyleSheet, useColorScheme } from "react-native";
import { Localize } from "../utils/Localize";
import { Colors } from "@/assets/Colors/Colors";
import HeadingView from "./HeadingView";
import { Data } from "../utils/Data";

function DescriptionView() {
  const colorScheme = useColorScheme();
  const descriptionBackgroundColor =
    colorScheme === "light"
      ? Colors.light.descriptionBackground
      : Colors.dark.descriptionBackground;

  return (
    <View style={styles.container}>
      <HeadingView title={Localize.aboutYourselfTitle} />
      <View
        style={[
          styles.descriptionView,
          { backgroundColor: descriptionBackgroundColor },
        ]}
      >
        <Text style={styles.description}>{Data.aboutMyself}</Text>
      </View>
    </View>
  );
}

export default DescriptionView;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  titleView: { marginBottom: 5 },
  title: {
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 5,
  },
  descriptionView: {
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  description: {
    fontSize: 16,
    fontWeight: "500",
  },
});
