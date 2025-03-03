import { StyleSheet, View } from "react-native";
import TitledView from "./TitledView";
import SubtitledView from "./SubtitledView";
import RoundedImageView from "./RoundedImageView";
import { Data } from "../utils/Data";

function ProfilePictureView() {
  return (
    <View style={styles.background}>
      <RoundedImageView></RoundedImageView>
      <TitledView text={Data.name} />
      <SubtitledView text={Data.email} />
    </View>
  );
}

export default ProfilePictureView;

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    padding: 10,
  },
});
