import React from "react";

import { StyleSheet, Text, View, Pressable } from "react-native";

import color from "../../styles/color";
import { contentPadding } from "../../styles/size";
import { globalStyle } from "../../styles/global";

import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

const inputButtonCode = {
  location: {
    text: "현재 위치로 설정",
    icon: (
      <FontAwesome5
        size={16}
        name="map-marker-alt"
        color={color.COLOR_GRAY_ICON}
      />
    ),
  },
  food: {
    text: "음식 종류 검색",
    icon: (
      <MaterialCommunityIcons
        size={18}
        name="food"
        color={color.COLOR_GRAY_ICON}
      />
    ),
  },
} as const;

type InputButtonType = keyof typeof inputButtonCode;

type Props = {
  type: InputButtonType;
  absolute?: boolean;
  shadow?: boolean;
};

const InputButton = ({ type, absolute, shadow }: Props) => {
  const onPress = () => {
    if (type === "location") {
    } else if (type === "food") {
    }
  };

  return (
    <View style={absolute ? styles.view : null}>
      <Pressable
        style={[styles.container, shadow && globalStyle.boxShadow]}
        onPress={onPress}
      >
        <View style={styles.textBox}>
          {inputButtonCode[type].icon}
          <Text style={styles.text}>{inputButtonCode[type].text}</Text>
        </View>

        <FontAwesome5
          color={color.COLOR_GRAY_ICON}
          size={16}
          name="chevron-right"
        />
      </Pressable>
    </View>
  );
};

export default InputButton;

const styles = StyleSheet.create({
  view: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 100,
    padding: contentPadding,
    width: "100%",
  },
  container: {
    width: "100%",
    backgroundColor: color.COLOR_INPUT_BACKGROUND,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text: {
    color: color.COLOR_GRAY_TEXT,
    fontSize: 16,
  },
});
