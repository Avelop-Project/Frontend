import MainLayout from "../../layout/MainLayout";
import { Text } from "react-native";

const CardsListScreen = () => {
  return (
    <MainLayout
      header={{
        headerText: "둘러보기",
        headerLeft: { type: "map" },
        headerRight: { type: "filter" },
      }}
    >
      <Text>CardsList</Text>
    </MainLayout>
  );
};

export default CardsListScreen;
