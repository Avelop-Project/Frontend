import React from "react";
import { Text, View } from "react-native";

import WebViewMap from "../map/WebViewMap";
import InputButton from "../../components/common/InputButton";
import RoundButton from "../../components/common/RoundButton";

const MyPageMap = () => {
  return (
    <View style={{ width: "100%" }}>
      <InputButton type="location" absolute={true} />

      <WebViewMap />

      <RoundButton text="현재 위치에서 검색" />
    </View>
  );
};

export default MyPageMap;
