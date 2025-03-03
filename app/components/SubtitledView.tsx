import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  Pressable,
} from "react-native";
import {
  isValidEmailAddressOrPhoneNumber,
  isValidEmailAddress,
  isValidCellNumber,
} from "../utils/Validation";
import LinkHelper from "../utils/LinkHelper";

interface Props {
  text: string;
}

const SubtitledView: React.FC<Props> = ({ text }) => {
  const colorScheme = useColorScheme();
  const textColor = colorScheme === "light" ? "dimgray" : "lightgray";

  function onPress() {
    if (isValidEmailAddress({ text })) {
      new LinkHelper().compose(text);
    } else if (isValidCellNumber({ text })) {
      new LinkHelper().dial(text);
    }
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          {
            opacity:
              pressed && isValidEmailAddressOrPhoneNumber({ text }) ? 0.5 : 1,
          },
        ]}
        onPress={onPress}
      >
        <Text
          style={[
            styles.subtitle,
            {
              color: textColor,
              textDecorationLine: isValidEmailAddressOrPhoneNumber({ text })
                ? "underline"
                : "none",
            },
          ]}
        >
          {text}
        </Text>
      </Pressable>
    </View>
  );
};

export default SubtitledView;

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold",
  },
});
