import React, { Dispatch, SetStateAction, useState } from "react";

import { StyleSheet, Pressable, Text, View } from "react-native";

import BottomSheet from "../../layout/bottomSheet/BottomSheet";
import BottomButton from "../../components/common/BottomButton";

import color from "../../styles/color";
import useStackNavigation from "../../hooks/useStackNavigation";
import FindAccountBottomSheet from "./FindAccountBottomSheet";

type Props = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

const LoginBottomSheet = ({ visible, setVisible }: Props) => {
  const navigation = useStackNavigation();
  const [findAccountVisible, setFindAccountVisible] = useState<boolean>(false);

  const onPressSignUp = () => {
    setVisible(false);
    navigation.navigate("SignUpScreen");
  };

  return (
    <>
      <BottomSheet
        visible={visible}
        setVisible={setVisible}
        headerText="로그인"
        ListFooterComponent={<BottomButton text="로그인" />}
      >
        <View style={styles.textWrapper}>
          <Pressable onPress={() => setFindAccountVisible(true)}>
            <Text style={styles.searchText}>아이디 찾기</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.searchText}>비밀번호 찾기</Text>
          </Pressable>
        </View>

        <View style={styles.textWrapper}>
          <Pressable onPress={onPressSignUp}>
            <Text style={styles.signUpText}>회원가입</Text>
          </Pressable>
        </View>

        <FindAccountBottomSheet
          visible={findAccountVisible}
          setVisible={setFindAccountVisible}
        />
      </BottomSheet>
    </>
  );
};

export default LoginBottomSheet;

const styles = StyleSheet.create({
  textWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
    backgroundColor: "orange",
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
