import React, { Dispatch, SetStateAction, useState } from "react";

import { StyleSheet, Pressable, Text, View } from "react-native";

import BottomSheet from "../../layout/bottomSheet/BottomSheet";
import BottomButton from "../../components/common/BottomButton";

import color from "../../styles/color";
import { FindType } from "./FindAccountBottomSheet";

import useStackNavigation from "../../hooks/useStackNavigation";

import FindAccountBottomSheet from "./FindAccountBottomSheet";
import Input from "../../components/common/Input";

type Props = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

const LoginBottomSheet = ({ visible, setVisible }: Props) => {
  const navigation = useStackNavigation();
  const [findAccountVisible, setFindAccountVisible] = useState<boolean>(false);
  const [findType, setFindType] = useState<FindType>("id");

  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onPressSignUp = () => {
    setVisible(false);
    navigation.navigate("SignUpScreen");
  };
  const onPressFind = (type: FindType) => {
    setFindType(type);
    setFindAccountVisible(true);
  };

  return (
    <>
      <BottomSheet
        visible={visible}
        setVisible={setVisible}
        headerText="로그인"
        ListFooterComponent={<BottomButton background={true} text="로그인" />}
      >
        <View style={styles.container}>
          <View style={styles.inputWrapper}>
            <Input
              value={id}
              setValue={setId}
              placeholder="아이디를 입력해주세요."
            />
            <Input
              value={password}
              setValue={setPassword}
              placeholder="비밀번호를 입력해주세요."
              secureTextEntry={true}
            />
          </View>

          <View style={styles.textWrapper}>
            <Pressable onPress={onPressFind.bind(this, "id")}>
              <Text style={styles.searchText}>아이디 찾기</Text>
            </Pressable>
            <Pressable onPress={onPressFind.bind(this, "password")}>
              <Text style={styles.searchText}>비밀번호 찾기</Text>
            </Pressable>
          </View>

          <View style={styles.textWrapper}>
            <Pressable onPress={onPressSignUp}>
              <Text style={styles.signUpText}>회원가입</Text>
            </Pressable>
          </View>

          <FindAccountBottomSheet
            type={findType}
            visible={findAccountVisible}
            setVisible={setFindAccountVisible}
          />
        </View>
      </BottomSheet>
    </>
  );
};

export default LoginBottomSheet;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    // height: 1000,
    // height: "100%",
    // backgroundColor: "aqua",
    justifyContent: "center",
  },
  inputWrapper: {
    marginBottom: 30,
  },
  textWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
    marginBottom: 15,
  },
  searchText: {
    color: color.COLOR_GRAY_TEXT,
    textDecorationLine: "underline",
    fontSize: 16,
  },
  signUpText: {
    fontSize: 18,
    fontWeight: "bold",
    color: color.COLOR_BLUE_TEXT,
  },
});
