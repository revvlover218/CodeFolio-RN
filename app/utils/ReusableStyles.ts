import { StyleSheet } from "react-native";

const ReusableStyles = StyleSheet.create({
  containerView: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  shadow3: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});

export default ReusableStyles;
