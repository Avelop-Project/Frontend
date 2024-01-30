import React, { Dispatch, SetStateAction, useState } from "react";

import { Text, StyleSheet, View } from "react-native";

import color from "../../styles/color";

import BottomSheet from "../../layout/bottomSheet/BottomSheet";
import BottomButton from "../../components/common/BottomButton";
import Input from "../../components/common/Input";
import VerifyInput from "../../components/common/VerifyInput";

const findType = {
  ID: "id",
  Password: "password",
} as const;
export type FindType = (typeof findType)[keyof typeof findType];

type Props = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  type: FindType;
};

const FindAccountBottomSheet = ({ visible, setVisible, type }: Props) => {
  const text =
    (type === "id" ? "아이디" : type === "password" ? "비밀번호" : "") +
    " 찾기";

  const [email, setEmail] = useState<string>("");
  const [id, setId] = useState<string>("");

  const handleFindId = async () => {};
  const handleFindPassword = async () => {};

  const handlePressFind = async () => {
    console.log("find", type);
    if (type === "id") {
      await handleFindId();
    } else if (type === "password") {
      await handleFindPassword();
    }
    setVisible(false);
  };

  return (
    <>
      <BottomSheet
        visible={visible}
        setVisible={setVisible}
        headerText={text}
        ListFooterComponent={
          <BottomButton
            onPress={handlePressFind}
            text={text}
            background={true}
          />
        }
      >
        <View style={styles.textWrapper}>
          <Text style={styles.infoText}>회원가입 시 입력한</Text>
          <Text style={styles.infoText}>
            {type === "password" && (
              <>
                <Text style={{ color: color.COLOR_MAIN }}>아이디</Text>
                {"와 "}
              </>
            )}
            <Text style={{ color: color.COLOR_MAIN }}>이메일</Text>을
            입력해주세요!
          </Text>
        </View>

        {type === "password" && (
          <VerifyInput
            input={{
              value: id,
              setValue: setId,
              placeholder: "아이디를 입력해주세요.",
            }}
            verify="id"
          />
        )}

        <VerifyInput
          input={{
            value: email,
            setValue: setEmail,
            placeholder: "이메일을 입력해주세요.",
          }}
          verify="email"
        />
      </BottomSheet>
    </>
  );
};

export default FindAccountBottomSheet;

const styles = StyleSheet.create({
  textWrapper: {
    marginVertical: 30,
    gap: 10,
  },
  infoText: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
