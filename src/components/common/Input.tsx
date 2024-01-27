import React, { Dispatch, SetStateAction, useState } from "react";

import { StyleSheet, Text, TextInput, View } from "react-native";

import color from "../../styles/color";
import { emailReg, pwdReg, idReg, nicknameReg } from "../../utils/verifyInput";

const verifyType = {
  Email: "email",
  Password: "password",
  CheckPassword: "checkPassword",
  ID: "id",
  Nickname: "nickname",
} as const;
type VerifyType = (typeof verifyType)[keyof typeof verifyType];

interface Verify {
  [key: string]: {
    description?: string;
    warning: string;
    regex: RegExp;
  };
}
const verifyInfo: Verify = {
  [verifyType.Email]: {
    warning: "이메일 형식이 올바르지 않습니다.",
    regex: emailReg,
  },
  [verifyType.Password]: {
    description:
      "영문 대소문자, 숫자, 특수기호 조합 8~15자 이내로 작성해주세요.",
    warning: "비밀번호 형식이 올바르지 않습니다.",
    regex: pwdReg,
  },
  [verifyType.CheckPassword]: {
    warning: "비밀번호가 일치하지 않습니다.",
    regex: new RegExp(""),
  },
  [verifyType.ID]: {
    description: "4~10자 이내의 아이디를 작성해주세요.",
    warning: "아이디 형식이 올바르지 않습니다.",
    regex: idReg,
  },
  [verifyType.Nickname]: {
    description: "4~10자 이내의 닉네임을 작성해주세요.",
    warning: "닉네임 형식이 올바르지 않습니다.",
    regex: nicknameReg,
  },
};

type Props = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder?: string;
  verify?: VerifyType;
  secureTextEntry?: boolean;
};

const Input = ({
  value,
  setValue,
  placeholder,
  verify,
  secureTextEntry,
}: Props) => {
  const [valid, setValid] = useState<boolean>(true);

  const onChangeText = (text: string) => {
    setValue(text);

    if (text === "") {
      setValid(true);
      return;
    }

    if (!verify) return;

    const test = verifyInfo[verify].regex.test(text);
    if (test && !valid) {
      setValid(true);
    } else if (!test && valid) {
      setValid(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={color.COLOR_GRAY_TEXT}
        secureTextEntry={secureTextEntry}
      />

      {verify && !valid && (
        <>
          <Text style={styles.warningText}>{verifyInfo[verify].warning}</Text>
        </>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 10,
    gap: 10,
  },
  input: {
    width: "100%",
    backgroundColor: color.COLOR_INPUT_BACKGROUND,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 6,
    fontSize: 16,
  },
  warningText: {
    color: color.COLOR_RED_TEXT,
    textAlign: "right",
  },
});
