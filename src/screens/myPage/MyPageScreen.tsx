import { Text, StyleSheet } from "react-native";

import MainLayout from "../../layout/MainLayout";
import ContentLayout from "../../layout/ContentLayout";

const MyPageScreen = () => {
  return (
    <MainLayout
      header={{ headerText: "마이페이지", headerRight: { type: "cog" } }}
    >
      <ContentLayout>
        <Text style={styles.text}>MyPage</Text>
      </ContentLayout>
    </MainLayout>
  );
};

export default MyPageScreen;

const styles = StyleSheet.create({
  text: {},
});
