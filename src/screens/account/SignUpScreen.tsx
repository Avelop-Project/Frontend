import React, { useState } from "react";

import { Text } from "react-native";

import MainLayout from "../../layout/MainLayout";
import BottomButton from "../../components/common/BottomButton";
import VerifyInput from "../../components/common/VerifyInput";
import VerifyPassword from "../../components/common/VerifyPassword";
import AccountInputWrapper from "../../components/account/AccountInputWrapper";
import AgreeToUseList from "../../components/account/AgreeToUseList";

const SignUpScreen = () => {
  const [nickname, setNickname] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");

  return (
    <>
      <MainLayout
        header={{ headerText: "회원가입", headerLeft: { type: "back" } }}
      >
        <AccountInputWrapper name="닉네임">
          <VerifyInput
            input={{
              value: nickname,
              setValue: setNickname,
              placeholder: "닉네임을 입력해주세요.",
            }}
            verify="nickname"
          />
        </AccountInputWrapper>

        <AccountInputWrapper name="아이디">
          <VerifyInput
            input={{
              value: id,
              setValue: setId,
              placeholder: "아이디를 입력해주세요.",
            }}
            verify="id"
          />
        </AccountInputWrapper>

        <AccountInputWrapper name="이메일">
          <VerifyInput
            input={{
              value: email,
              setValue: setEmail,
              placeholder: "이메일을 입력해주세요.",
            }}
            verify="email"
          />
        </AccountInputWrapper>

        <AccountInputWrapper name="비밀번호">
          <VerifyPassword
            password={{
              value: password,
              setValue: setPassword,
              placeholder: "비밀번호 입력",
            }}
            passwordCheck={{
              value: passwordCheck,
              setValue: setPasswordCheck,
              placeholder: "비밀번호 확인",
            }}
          />
        </AccountInputWrapper>

        <AccountInputWrapper name="이용약관 동의">
          <AgreeToUseList />
        </AccountInputWrapper>
      </MainLayout>

      <BottomButton background={true} text="회원가입" />
    </>
  );
};

export default SignUpScreen;
