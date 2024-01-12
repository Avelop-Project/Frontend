import { Text, StyleSheet, View, ScrollView } from "react-native";

import MainLayout from "../../layout/MainLayout";
import PriceFilter from "../../components/cardsList/PriceFilter";

const CardsListScreen = () => {
  return (
    <>
      <MainLayout
        header={{
          headerText: "둘러보기",
          headerLeft: { type: "map" },
          headerRight: { type: "filter" },
        }}
        stickyHeaderIndices={[0]}
      >
        <PriceFilter />

        <View style={styles.container}>
          <Text>CardsList</Text>
        </View>
      </MainLayout>
    </>
  );
};

export default CardsListScreen;

const styles = StyleSheet.create({
  container: {
    height: 1000,
  },
});
