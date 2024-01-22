import React from "react";

import { Text } from "react-native";

import MainLayout from "../../layout/MainLayout";

const SearchLocationScreen = () => {
  return (
    <>
      <MainLayout
        header={{
          headerText: "위치 검색",
          headerLeft: {
            type: "back",
          },
        }}
      >
        <Text>위치 검색</Text>
      </MainLayout>
    </>
  );
};

export default SearchLocationScreen;
