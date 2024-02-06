import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, View, Pressable, Text } from "react-native";

import axios from "axios";
import { TEST_API_URL } from "../../config";

import MainLayout from "../../layout/MainLayout";
import PriceFilter from "../../components/cardsList/PriceFilter";
import CardsSet from "../../components/cardsList/CardsSet";

const CardsListScreen = () => {
  const testAPI = async () => {
    try {
      const res = await axios.get(`${TEST_API_URL}/card/browse`);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    testAPI();
  }, []);

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
