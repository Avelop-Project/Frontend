import React from "react";
import { View, StyleSheet } from "react-native";

type Props = {
  children: React.ReactNode;
};

const ContentLayout = ({ children }: Props) => {
  return <View style={styles.view}>{children}</View>;
};

export default ContentLayout;

const styles = StyleSheet.create({
  view: {
    height: 1000,
    padding: 10,
  },
});
