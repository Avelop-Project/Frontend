import MainLayout from "../../layout/MainLayout";

import { Text, StyleSheet } from "react-native";

const MyPageScreen = () => {
  return (
    <MainLayout header={{ headerText: "마이페이지" }}>
      <Text style={styles.text}>MyPage</Text>
    </MainLayout>
  );
};

export default MyPageScreen;

const styles = StyleSheet.create({
  text: {},
});
