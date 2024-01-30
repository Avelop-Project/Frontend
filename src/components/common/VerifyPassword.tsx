import React, { useEffect, useState } from "react";

import { View, StyleSheet, Text } from "react-native";

import Input, { Props as InputProps } from "./Input";

import color from "../../styles/color";
import { pwdReg } from "../../utils/verifyInput";

type Props = {
  password: InputProps;
  passwordCheck: InputProps;
};

const VerifyPassword = ({ password, passwordCheck }: Props) => {
  const [valid, setValid] = useState({
    password: true,
    passwordCheck: true,
  });

  useEffect(() => {
    const { value } = password;
    let pwdValid = valid.password;

    if (value) {
      const test = pwdReg.test(value);
      if (test) pwdValid = true;
      else pwdValid = false;
    } else {
      pwdValid = true;
    }

    if (valid.password !== pwdValid) {
      setValid({
        ...valid,
        password: pwdValid,
      });
    }
  }, [password.value]);

  useEffect(() => {
    const { value } = passwordCheck;
    let check = valid.passwordCheck;

    if (value) {
      if (value === password.value) check = true;
      else check = false;
    } else {
      check = true;
    }

    if (valid.passwordCheck !== check) {
      setValid({
        ...valid,
        passwordCheck: check,
      });
    }
  }, [passwordCheck.value]);

  return (
    <View style={styles.container}>
      <Input
        {...password}
        secureTextEntry={true}
        borderColor={!valid.password ? color.COLOR_RED_TEXT : undefined}
      />
      <Input
        {...passwordCheck}
        secureTextEntry={true}
        editable={!valid.password || password.value.length === 0 ? false : true}
        borderColor={!valid.passwordCheck ? color.COLOR_RED_TEXT : undefined}
      />

      {!valid.password ? (
        <Text style={styles.warningText}>
          영문 대소문자, 숫자, 특수문자 조합 8~16자로 입력해주세요.
        </Text>
      ) : !valid.passwordCheck ? (
        <Text style={styles.warningText}>비밀번호가 일치하지 않습니다.</Text>
      ) : null}
    </View>
  );
};

export default VerifyPassword;

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
