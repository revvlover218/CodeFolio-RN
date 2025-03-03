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
      <View style={styles.shadowView}>
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
    </View>
  );
}

export default DescriptionView;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  shadowView: {
    padding: 10,
    borderRadius: 10,
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
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  description: {
    fontSize: 16,
    fontWeight: "500",
  },
});
