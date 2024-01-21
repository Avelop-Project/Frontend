import React from "react";
import { StyleSheet, Pressable, Text, View } from "react-native";
import color from "../../styles/color";

export type Props = {
  text: string;
  onPress?: () => any;
  background?: boolean;
};

const RoundButton = ({ text, onPress, background }: Props) => {
  return (
    <View
      style={[
        styles.container,
        background && { backgroundColor: color.COLOR_WHITE_BACKGROUND },
      ]}
    >
      <Pressable style={styles.btn} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default RoundButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    paddingTop: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    alignItems: "center",
  },
  btn: {
    backgroundColor: color.COLOR_ROUND_BUTTON,
    paddingVertical: 10,
    borderRadius: 100,
    alignItems: "center",
    width: "60%",
  },
  text: {
    color: color.COLOR_WHITE_TEXT,
    fontWeight: "bold",
    fontSize: 18,
  },
});
