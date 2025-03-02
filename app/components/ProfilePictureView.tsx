import { StyleSheet, View } from "react-native";
import TitledView from "./TitledView";
import SubtitledView from "./SubtitledView";
import RoundedImageView from "./RoundedImageView";

function ProfilePictureView() {
  return (
    <View style={styles.background}>
      <RoundedImageView></RoundedImageView>
      <TitledView></TitledView>
      <SubtitledView></SubtitledView>
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
