import { StyleSheet } from "react-native";
import color from "./color";

export const globalStyle = StyleSheet.create({
  boxShadow: {
    shadowColor: color.COLOR_BOX_SHADOW,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.2,
    elevation: 3,
  },
});
