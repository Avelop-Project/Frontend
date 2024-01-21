import React from "react";

import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import SideMenuLayout from "../../layout/sideMenu/SideMenuLayout";
import FilterList from "../../components/common/FilterList";

import useStackNavigation from "../../hooks/useStackNavigation";
import color from "../../styles/color";

const ResetButton = () => {
  return (
    <Pressable>
      <FontAwesome
        name="refresh"
        size={20}
        // color={color.COLOR_GRAY_ICON}
      />
    </Pressable>
  );
};

const FilterMenuScreen = () => {
  const navigation = useStackNavigation();

  const handleFiltering = () => {};
  const handleReset = () => {};

  return (
    <>
      <SideMenuLayout
        headerText="필터"
        headerRight={<ResetButton />}
        btn={{
          text: "필터 적용",
          background: true,
          onPress: handleFiltering,
        }}
      >
        <FilterList label="가격대" />
        <FilterList label="음식 종류" />
        <FilterList label="리뷰 태그" reviewTag={true} />
      </SideMenuLayout>
    </>
  );
};

export default FilterMenuScreen;
