import { StyleSheet, View, FlatList } from "react-native";

import { contentPadding } from "../../styles/size";

import Card from "./Card";

const CardsList = () => {
  return (
    <View>
      <FlatList
        data={dummy}
        keyExtractor={({ id }) => id}
        renderItem={({}) => <Card size={"medium"} />}
        horizontal={false}
        numColumns={3}
        columnWrapperStyle={styles.wrapper}
        style={styles.wrapper}
      />
    </View>
  );
};

export default CardsList;

const styles = StyleSheet.create({
  wrapper: {
    gap: contentPadding,
  },
});

const dummy = [
  {
    id: "dummy1",
  },
  {
    id: "dummy2",
  },
  {
    id: "dummy3",
  },
  {
    id: "dummy4",
  },
  {
    id: "dummy5",
  },
  {
    id: "dummy6",
  },
  {
    id: "dummy7",
  },
  {
    id: "dummy8",
  },
];
