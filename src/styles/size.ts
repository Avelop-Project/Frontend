import { useWindowDimensions, Dimensions } from "react-native";

// export const dw = useWindowDimensions().width;
// export const dh = useWindowDimensions().height;

export const dw = Dimensions.get("window").width;
export const dh = Dimensions.get("window").height;

export const contentPadding = 10;
export const contentWidth = dw - contentPadding * 2;
