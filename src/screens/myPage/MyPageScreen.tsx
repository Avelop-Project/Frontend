import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";

import MainLayout from "../../layout/MainLayout";
import MyPageTabBar from "../../components/myPage/MyPageTabBar";
import MyPageList from "../../components/myPage/MyPageList";
import MyPageMap from "../../components/myPage/MyPageMap";

const tabCode = {
  List: "list",
  Map: "map",
} as const;
export type MyPageTabType = (typeof tabCode)[keyof typeof tabCode];

const MyPageScreen = () => {
  const [currentTab, setCurrentTab] = useState<MyPageTabType>("list");

  return (
    <MainLayout
      header={{ headerText: "마이페이지", headerRight: { type: "cog" } }}
      stickyHeaderIndices={[0]}
      ListHeaderComponent={
        <MyPageTabBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      }
      padding={currentTab === "map" ? 0 : undefined}
    >
      {currentTab === "list" ? (
        <MyPageList />
      ) : currentTab === "map" ? (
        <MyPageMap />
      ) : null}
    </MainLayout>
  );
};

export default MyPageScreen;

const styles = StyleSheet.create({
  text: {},
});
