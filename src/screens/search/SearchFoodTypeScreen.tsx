import React from "react";

import { Text } from "react-native";

import MainLayout from "../../layout/MainLayout";

const SearchFoodTypeScreen = () => {
  return (
    <>
      <MainLayout
        header={{
          headerText: "음식 종류 검색",
          headerLeft: {
            type: "back",
          },
        }}
      >
        <Text>음식 검색</Text>
      </MainLayout>
    </>
  );
};

export default SearchFoodTypeScreen;
