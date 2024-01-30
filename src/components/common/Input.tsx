import React, { Dispatch, SetStateAction } from "react";

import { StyleSheet, TextInput, TextInputProps } from "react-native";

import color from "../../styles/color";

export type Props = TextInputProps & {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  borderColor?: string;
  handleChangeText?: () => any;
};

const Input = ({
  value,
  setValue,
  borderColor,
  editable = true,
  handleChangeText,
  ...rest
}: Props) => {
  const onChangeText = (text: string) => {
    setValue(text);

    if (handleChangeText) {
      handleChangeText();
    }
  };

  return (
    <TextInput
      style={[
        styles.input,
        borderColor ? { borderColor } : null,
        !editable
          ? {
              backgroundColor: color.COLOR_LIGHTGRAY_BACKGROUND,
              borderColor: color.COLOR_LIGHTGRAY_BACKGROUND,
            }
          : null,
      ]}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor={color.COLOR_GRAY_TEXT}
      editable={editable}
      {...rest}
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
