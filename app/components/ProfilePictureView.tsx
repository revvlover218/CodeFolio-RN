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
      <SubtitledView text={Data.profession} />
      <SubtitledView text={Data.email} />
      <SubtitledView text={Data.phone} />
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
