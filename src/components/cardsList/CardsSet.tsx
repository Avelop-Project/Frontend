import { View, StyleSheet } from "react-native";

import { contentPadding } from "../../styles/size";

import Card from "./Card";

type Props = {
  index: number;
};

const CardsSet = ({ index }: Props) => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: index % 2 == 0 ? "row" : "row-reverse",
        },
      ]}
    >
      <Card size="big" />

      <View style={styles.smallBox}>
        <Card size={"small"} />
        <Card size={"small"} />
      </View>
    </View>
  );
};

export default CardsSet;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: contentPadding,
  },
  smallBox: {
    justifyContent: "space-between",
  },
});
