import React from "react";

import { View, StyleSheet, Text } from "react-native";

import color from "../../styles/color";

type Props = {
  name: string;
  children: React.ReactNode;
};

const AccountInputWrapper = ({ name, children }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.name}>{name}</Text>
      </View>

      {children}
    </View>
  );
};

export default AccountInputWrapper;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    gap: 15,
    borderBottomColor: color.COLOR_GRAY_BORDER,
    borderBottomWidth: 1,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
