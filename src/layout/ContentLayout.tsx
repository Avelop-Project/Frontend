import React from "react";
import { View, StyleSheet } from "react-native";
import { contentPadding } from "../styles/size";

type Props = {
  children: React.ReactNode;
};

const ContentLayout = ({ children }: Props) => {
  return <View style={styles.view}>{children}</View>;
};

export default ContentLayout;

const styles = StyleSheet.create({
  view: {
    padding: contentPadding,
    paddingBottom: 200,
    width: "100%",
  },
});
