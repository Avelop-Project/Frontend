import React from "react";

import { WebView } from "react-native-webview";
import { View, Text, StyleSheet } from "react-native";

import { contentPadding } from "../../styles/size";

import MainLayout from "../../layout/MainLayout";
import WebViewMap from "../../components/map/WebViewMap";
import RoundButton from "../../components/common/RoundButton";
import InputButton from "../../components/common/InputButton";

const LocationScreen = () => {
  return (
    <>
      <MainLayout
        header={{ headerText: "위치 검색", headerLeft: { type: "back" } }}
        padding={0}
      >
        {/* <View style={styles.inputView}>
          <InputButton type="location" />
        </View> */}
        <InputButton type="location" absolute={true} />

        <WebViewMap />
      </MainLayout>

      <RoundButton text="둘러보기" />
    </>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  inputView: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 100,
    padding: contentPadding,
    width: "100%",
  },
});
