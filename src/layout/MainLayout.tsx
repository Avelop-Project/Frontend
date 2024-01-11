import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, View } from "react-native";

import color from "../styles/color";

import Header from "./header/Header";
import { HeaderProps } from "./header/Header";

type Props = {
  children: React.ReactNode;
  header: HeaderProps;
};

const MainLayout = ({ children, header }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header options={header} />

      <ScrollView style={styles.inner}>
        <View style={styles.content}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainLayout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.COLOR_HEADER,
    width: "100%",
    flex: 1,
  },
  inner: {
    width: "100%",
    flex: 1,
    // backgroundColor: "aqua",
  },
  content: {
    width: "100%",
    flex: 1,
    // backgroundColor: "orange",
  },
});
