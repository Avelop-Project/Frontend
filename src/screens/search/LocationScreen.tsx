import React from "react";

import { WebView } from "react-native-webview";
import { View, Text, StyleSheet } from "react-native";

import MainLayout from "../../layout/MainLayout";

import WebViewMap from "../../components/map/WebViewMap";
import RoundButton from "../../components/common/RoundButton";

const LocationScreen = () => {
  return (
    <>
      <MainLayout
        header={{ headerText: "위치 검색", headerLeft: { type: "back" } }}
        padding={0}
      >
        <WebViewMap />
      </MainLayout>

      <RoundButton text="둘러보기" />
    </>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({});
