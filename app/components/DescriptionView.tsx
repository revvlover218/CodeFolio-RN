import { View, Text, StyleSheet, useColorScheme } from "react-native";
import Localize from "../utils/Localize";
import { Colors } from "@/assets/Colors/Colors";
import HeadingView from "./HeadingView";
import Data from "../utils/Data";
import ReusableStyles from "../utils/ReusableStyles";
import RoundedView from "./RoundedView";

function DescriptionView() {
  const colorScheme = useColorScheme();
  const descriptionBackgroundColor =
    colorScheme === "light"
      ? Colors.light.descriptionBackground
      : Colors.dark.descriptionBackground;

  return (
    <View style={ReusableStyles.containerView}>
      <HeadingView text={Localize.aboutYourselfTitle} />
      <RoundedView>
        <Text style={styles.description}>{Data.aboutMyself}</Text>
      </RoundedView>
    </View>
  );
}

export default DescriptionView;

const styles = StyleSheet.create({
  description: {
    fontSize: 16,
    fontWeight: "500",
  },
});
