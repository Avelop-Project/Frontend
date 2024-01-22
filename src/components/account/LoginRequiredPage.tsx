import React, { useState } from "react";

import { View, StyleSheet, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import AccountButton from "./AccountButton";
import LoginBottomSheet from "./LoginBottomSheet";

import color from "../../styles/color";
import useStackNavigation from "../../hooks/useStackNavigation";

const LoginRequiredPage = () => {
  const navigation = useStackNavigation();
  const [loginVisible, setLoginVisible] = useState<boolean>(false);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.textBox}>
          <View style={styles.warningBox}>
            <FontAwesome name="warning" size={25} color={color.COLOR_MAIN} />
            <Text style={styles.warningText}>로그인이 필요</Text>
          </View>

          <Text style={styles.text}>로그인 후 사용 가능한 서비스입니다.</Text>
        </View>

        <AccountButton type="login" onPress={() => setLoginVisible(true)} />
        <AccountButton
          type="signUp"
          onPress={() => {
            navigation.navigate("SignUpScreen");
          }}
        />
      </View>

      <LoginBottomSheet visible={loginVisible} setVisible={setLoginVisible} />
    </>
  );
};

export default LoginRequiredPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "aqua",
  },
  textBox: {
    alignItems: "center",
    paddingTop: 200,
    gap: 25,
    paddingBottom: 25,
  },
  warningBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  warningText: {
    fontSize: 25,
    fontWeight: "bold",
    color: color.COLOR_MAIN,
  },
  text: {
    fontSize: 16,
    color: color.COLOR_GRAY_TEXT,
  },
});
