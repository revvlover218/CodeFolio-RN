import { GestureResponderEvent, Pressable, StyleSheet } from "react-native";
import RoundedView from "./RoundedView";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

interface Props {
  locationButtonPressed: (event: GestureResponderEvent) => void;
}

const UserLocationView: React.FC<Props> = ({ locationButtonPressed }) => {
  return (
    <Pressable
      style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
      onPress={locationButtonPressed}
    >
      <RoundedView style={styles.container}>
        <MaterialIcons name="my-location" size={30} color="black" />
      </RoundedView>
    </Pressable>
  );
};

export default UserLocationView;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 25,
    bottom: 30,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
    pointerEvents: "auto",
  },
});
