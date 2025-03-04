import { Colors } from "@/assets/Colors/Colors";
import { StyleSheet, useColorScheme, View, ViewStyle } from "react-native";
import ReusableStyles from "../utils/ReusableStyles";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  style?: ViewStyle;
}

const RoundedView: React.FC<Props> = ({ children, style }) => {
  const colorScheme = useColorScheme();
  const descriptionBackgroundColor =
    colorScheme === "light"
      ? Colors.light.descriptionBackground
      : Colors.dark.descriptionBackground;
  return (
    <View
      style={[
        styles.container,
        ReusableStyles.shadow3,
        style,
        { backgroundColor: descriptionBackgroundColor },
      ]}
    >
      {children}
    </View>
  );
};

export default RoundedView;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 10,
  },
});
