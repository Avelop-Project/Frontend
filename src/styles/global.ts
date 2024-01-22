import { StyleSheet } from "react-native";
import color from "./color";

export const globalStyle = StyleSheet.create({
  boxShadow: {
    shadowColor: color.COLOR_BOX_SHADOW,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.3,
    elevation: 3,
  },
});
