import React, { Dispatch, SetStateAction } from "react";

import { StyleSheet, TextInput } from "react-native";

import color from "../../styles/color";

export type Props = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder?: string;
  secureTextEntry?: boolean;
  borderColor?: string;
};

const Input = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  borderColor,
}: Props) => {
  return (
    <TextInput
      style={[styles.input, borderColor ? { borderColor } : null]}
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      placeholderTextColor={color.COLOR_GRAY_TEXT}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    backgroundColor: color.COLOR_INPUT_BACKGROUND,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 6,
    fontSize: 16,
    marginBottom: 10,
    borderWidth: 1.5,
    borderColor: color.COLOR_INPUT_BACKGROUND,
  },
});
