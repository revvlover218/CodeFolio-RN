import { Colors } from "@/assets/Colors/Colors";
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  ViewStyle,
} from "react-native";

type Props = {
  text: String;
  useSecondaryFontSize?: boolean;
};

const HeadingView: React.FC<Props> = ({ text, useSecondaryFontSize }) => {
  const colorScheme = useColorScheme();
  const textColor =
    colorScheme === "light" ? Colors.light.icon : Colors.dark.icon;
  return (
    <View style={styles.titleView}>
      <Text
        style={[
          styles.title,
          {
            color: textColor,
            fontSize: useSecondaryFontSize && useSecondaryFontSize ? 16 : 20,
          },
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

export default HeadingView;

const styles = StyleSheet.create({
  titleView: { marginBottom: 5 },
  title: {
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 5,
  },
});
