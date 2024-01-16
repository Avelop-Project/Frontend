import { Text, StyleSheet, View, ScrollView } from "react-native";

import MainLayout from "../../layout/MainLayout";
import ContentLayout from "../../layout/ContentLayout";
import PriceFilter from "../../components/cardsList/PriceFilter";

import CardsSet from "../../components/cardsList/CardsSet";

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

        <ContentLayout>
          {[...new Array(3)].map((el, index) => (
            <CardsSet key={index} index={index} />
          ))}
        </ContentLayout>
      </MainLayout>
    </>
  );
};

export default CardsListScreen;

const styles = StyleSheet.create({});
