import { StyleSheet, View, FlatList } from "react-native";

import { contentPadding } from "../../styles/size";

import Card from "./Card";

const CardsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={dummy}
        keyExtractor={({ id }) => id}
        renderItem={({}) => <Card size={"medium"} />}
        horizontal={false}
        numColumns={3}
        columnWrapperStyle={{
          gap: contentPadding,
        }}
        contentContainerStyle={{
          gap: contentPadding,
        }}
      />
    </View>
  );
};

export default CardsList;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "orange",
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
