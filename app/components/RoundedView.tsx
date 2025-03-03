import { Colors } from "@/assets/Colors/Colors";
import { StyleSheet, useColorScheme, View } from "react-native";
import { reusableStyles } from "../utils/ReusableStyles";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const RoundedView: React.FC<Props> = ({ children }) => {
  const colorScheme = useColorScheme();
  const descriptionBackgroundColor =
    colorScheme === "light"
      ? Colors.light.descriptionBackground
      : Colors.dark.descriptionBackground;
  return (
    <View
      style={[
        styles.container,
        reusableStyles.shadow3,
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
