import React from "react";

import { Text, Pressable, StyleSheet, View } from "react-native";

import color from "../../styles/color";

type Props = {
  text: string;
  onPress?: () => any;
  background?: boolean;
};

const BottomButton = ({ text, onPress, background }: Props) => {
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

export default BottomButton;

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
    width: "100%",
    backgroundColor: color.COLOR_MAIN,
    borderRadius: 7,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: color.COLOR_WHITE_TEXT,
    fontWeight: "bold",
    fontSize: 18,
  },
});
