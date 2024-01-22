import React from "react";

import { Text } from "react-native";

import MainLayout from "../../layout/MainLayout";

const SignUpScreen = () => {
  return (
    <>
      <MainLayout
        header={{ headerText: "회원가입", headerLeft: { type: "back" } }}
      >
        <Text>회원가입</Text>
      </MainLayout>
    </>
  );
};

export default SignUpScreen;
