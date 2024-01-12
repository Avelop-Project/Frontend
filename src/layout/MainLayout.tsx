import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, View, Text } from "react-native";

import color from "../styles/color";

import Header from "./header/Header";
import { HeaderProps } from "./header/Header";

type Props = {
  children: React.ReactNode;
  header: HeaderProps;
  stickyHeaderIndices?: number[];
};

const MainLayout = ({ children, header, stickyHeaderIndices }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header options={header} />

      <ScrollView
        style={styles.scrollView}
        stickyHeaderIndices={stickyHeaderIndices}
      >
        {children}
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
  scrollView: {
    flex: 1,
    width: "100%",
  },
});
