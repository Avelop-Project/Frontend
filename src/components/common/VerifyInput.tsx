import React, { useEffect, useState } from "react";

import { View, StyleSheet, Text } from "react-native";

import Input, { Props as InputProps } from "./Input";

import color from "../../styles/color";
import { emailReg, pwdReg, idReg, nicknameReg } from "../../utils/verifyInput";

const verifyType = {
  Email: "email",
  ID: "id",
  Nickname: "nickname",
} as const;
type VerifyType = (typeof verifyType)[keyof typeof verifyType];

interface Verify {
  [key: string]: {
    warning: string;
    regex: RegExp;
  };
}
const verifyInfo: Verify = {
  [verifyType.Email]: {
    warning: "이메일 형식이 올바르지 않습니다.",
    regex: emailReg,
  },
  [verifyType.ID]: {
    warning: "아이디를 4~10자로 입력해주세요.",
    regex: idReg,
  },
  [verifyType.Nickname]: {
    warning: "닉네임을 4~10자로 입력해주세요.",
    regex: nicknameReg,
  },
};

export type Props = {
  input: InputProps;
  verify: VerifyType;
};

const VerifyInput = ({ input, verify }: Props) => {
  const [valid, setValid] = useState<boolean>(true);

  useEffect(() => {
    const { value } = input;

    if (value) {
      const test = verifyInfo[verify].regex.test(value);

      if (test && !valid) {
        setValid(true);
      } else if (!test && valid) {
        setValid(false);
      }
    } else {
      setValid(true);
    }
  }, [input.value]);

  return (
    <View style={styles.container}>
      <Input
        {...input}
        borderColor={!valid ? color.COLOR_RED_TEXT : undefined}
      />

      {!valid && (
        <Text style={styles.warningText}>{verifyInfo[verify].warning}</Text>
      )}
    </View>
  );
};

export default VerifyInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 10,
  },
  warningText: {
    color: color.COLOR_RED_TEXT,
    textAlign: "right",
  },
});
