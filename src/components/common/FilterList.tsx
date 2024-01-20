import React from "react";

import { StyleSheet, Text, View, FlatList } from "react-native";

import color from "../../styles/color";
import ReviewTagList from "../../constants/reviewTag";

import FilterItem from "./FilterItem";
import ReviewTag from "./ReviewTag";

type Props = {
  label: string;
  required?: boolean;
  optional?: boolean;
  reviewTag?: boolean;
};

const FilterList = ({ label, required, optional, reviewTag }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelBox}>
        <Text style={styles.labelText}>{label}</Text>

        {required && !optional && (
          <Text style={[styles.subText, { color: color.COLOR_BLUE_TEXT }]}>
            (필수)
          </Text>
        )}
        {optional && !required && <Text style={styles.subText}>(선택)</Text>}
      </View>

      {reviewTag ? (
        <FlatList
          data={Object.values(ReviewTagList)}
          renderItem={({ item }) => (
            <ReviewTag reviewTag={item} outlined={true} />
          )}
          style={styles.filterList}
        />
      ) : (
        <FlatList
          data={[...new Array(8)]}
          renderItem={({ item }) => <FilterItem name="필터" outlined={true} />}
          style={styles.filterList}
        />
      )}
    </View>
  );
};

export default FilterList;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: color.COLOR_GRAY_BORDER,
    borderBottomWidth: 1,
    paddingVertical: 15,
  },
  labelBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  labelText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  subText: {
    color: color.COLOR_GRAY_TEXT,
  },
  filterList: {
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 10,
    rowGap: 7,
    marginTop: 15,
  },
});
