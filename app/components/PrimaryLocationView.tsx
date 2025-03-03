import { useColorScheme, View } from "react-native";
import HeadingView from "./HeadingView";
import { Localize } from "../utils/Localize";
import { reusableStyles } from "../utils/ReusableStyles";
import { Colors } from "@/assets/Colors/Colors";
import RoundedView from "./RoundedView";

function PrimaryLocationView() {
  const colorScheme = useColorScheme();
  const descriptionBackgroundColor =
    colorScheme === "light"
      ? Colors.light.descriptionBackground
      : Colors.dark.descriptionBackground;
  return (
    <View style={reusableStyles.containerView}>
      <HeadingView title={Localize.mapViewTitle} />
      <RoundedView>
        <View style={[{ height: 200 }]}></View>
      </RoundedView>
    </View>
  );
}

export default PrimaryLocationView;
