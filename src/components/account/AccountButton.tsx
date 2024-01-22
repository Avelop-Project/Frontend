import React from "react";

import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

import color from "../../styles/color";
import { globalStyle } from "../../styles/global";

const buttonType = {
  Login: "login",
  SignUp: "signUp",
  Logout: "logout",
  Delete: "delete",
} as const;
type ButtonType = (typeof buttonType)[keyof typeof buttonType];

type Props = {
  type: ButtonType;
  onPress?: () => any;
};

interface IButton {
  [key: string]: {
    color: string;
    text: string;
    description?: string;
  };
}

const buttonInfo: IButton = {
  [buttonType.Login]: {
    color: color.COLOR_BLUE_TEXT,
    text: "로그인 하기",
  },
  [buttonType.SignUp]: {
    color: color.COLOR_BLUE_TEXT,
    text: "회원가입 하기",
  },
  [buttonType.Delete]: {
    color: color.COLOR_RED_TEXT,
    text: "계정 삭제",
    description: "계정 삭제 시 해당 계정 내 모든 데이터는 영구 삭제 됩니다.",
  },
  [buttonType.Logout]: {
    color: color.COLOR_RED_TEXT,
    text: "로그아웃",
  },
};

const AccountButton = ({ type, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View style={styles.box}>
        <Text
          style={[
            styles.text,
            {
              color: buttonInfo[type].color,
            },
          ]}
        >
          {buttonInfo[type].text}
        </Text>
        <FontAwesome5
          name="chevron-right"
          color={color.COLOR_GRAY_ICON}
          size={18}
        />
      </View>

      {buttonInfo[type].description && (
        <Text style={styles.description}>{buttonInfo[type].description}</Text>
      )}
    </TouchableOpacity>
  );
};

export default AccountButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: color.COLOR_ACCOUNT_BTN_BACKGROUND,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 6,
    ...globalStyle.boxShadow,
    marginBottom: 15,
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
  },
  description: {
    marginTop: 10,
    color: color.COLOR_GRAY_TEXT,
  },
});
