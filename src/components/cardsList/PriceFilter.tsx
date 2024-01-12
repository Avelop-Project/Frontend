import React from "react";

import { StyleSheet, View, Text, ScrollView } from "react-native";

import color from "../../styles/color";

import FilterItem from "../../components/common/FilterItem";

const dummy = [
  "1만원 이하",
  "1.5만원 이하",
  "3만원 이하",
  "5만원 이하",
  "5만원 이상",
];

const PriceFilter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.text}>가격대</Text>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.list}>
          {dummy.map((text, idx) => (
            <FilterItem key={`${text}_${idx}`} name={text} outlined={true} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default PriceFilter;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: color.COLOR_GRAY_BORDER,
    borderBottomWidth: 1,
  },
  textBox: {
    backgroundColor: color.COLOR_WHITE_BACKGROUND,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
  list: {
    backgroundColor: color.COLOR_WHITE_BACKGROUND,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
  },
});
