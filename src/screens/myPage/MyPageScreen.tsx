import { Text, StyleSheet } from "react-native";

const MyPageScreen = () => {
  return <Text style={styles.text}>MyPage</Text>;
};

export default MyPageScreen;

const styles = StyleSheet.create({
  text: {
    color: "orange",
  },
});
