import { View, Text, StyleSheet } from "react-native";

import HeadingView from "./HeadingView";
import RoundedView from "./RoundedView";
import Localize from "../utils/Localize";
import Data from "../utils/Data";
import ReusableStyles from "../utils/ReusableStyles";

const DescriptionView = () => {
  return (
    <View style={ReusableStyles.containerView}>
      <HeadingView text={Localize.aboutYourselfTitle} />
      <RoundedView>
        <Text style={styles.description}>{Data.aboutMyself}</Text>
      </RoundedView>
    </View>
  );
};

export default DescriptionView;

const styles = StyleSheet.create({
  description: {
    fontSize: 16,
    fontWeight: "500",
  },
});
