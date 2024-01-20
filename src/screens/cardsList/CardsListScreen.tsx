import React, { useState } from "react";
import { StyleSheet, FlatList, Pressable, View } from "react-native";

import MainLayout from "../../layout/MainLayout";
import PriceFilter from "../../components/cardsList/PriceFilter";
import CardsSet from "../../components/cardsList/CardsSet";
import { dh, dw } from "../../styles/size";

const CardsListScreen = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <>
      <MainLayout
        header={{
          headerText: "둘러보기",
          headerLeft: { type: "map" },
          headerRight: { type: "filter" },
        }}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={<PriceFilter />}
      >
        <FlatList
          data={[1, 2, 3, 4]}
          renderItem={({ item, index }) => <CardsSet index={index} />}
          keyExtractor={(item, idx) => `${idx}`}
          onEndReached={() => console.log("end")}
        />
      </MainLayout>
    </>
  );
};

export default CardsListScreen;

const styles = StyleSheet.create({});
