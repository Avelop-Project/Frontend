import { View, StyleSheet, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import color from "../../styles/color";

const MyPageInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <FontAwesome5 name="user-alt" size={16} color={color.COLOR_GRAY_ICON} />
        <Text style={styles.nickName}>쩝쩝박사</Text>
      </View>

      <View style={styles.wrapper}>
        <FontAwesome5 name="pen" color={color.COLOR_GRAY_ICON} />
        <Text style={styles.review}>리뷰 10개</Text>
      </View>
    </View>
  );
};

export default MyPageInfo;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  nickName: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  review: {
    color: color.COLOR_GRAY_TEXT,
    marginLeft: 6,
  },
});
