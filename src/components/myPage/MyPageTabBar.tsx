import { SetStateAction, Dispatch, useCallback } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { MyPageTabType } from "../../screens/myPage/MyPageScreen";
import MyPageInfo from "./MyPageInfo";

import color from "../../styles/color";

type TabProps = {
  currentTab: MyPageTabType;
  setCurrentTab: Dispatch<SetStateAction<MyPageTabType>>;
  icon: string;
  tab: MyPageTabType;
};

type Props = {
  currentTab: MyPageTabType;
  setCurrentTab: Dispatch<SetStateAction<MyPageTabType>>;
};

const MyPageTab = ({ currentTab, setCurrentTab, icon, tab }: TabProps) => {
  const onPress = useCallback(() => {
    setCurrentTab(tab);
  }, [tab]);

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.tabBtn,
        currentTab === tab && {
          borderBottomWidth: 2,
          borderBottomColor: color.COLOR_MAIN,
        },
      ]}
    >
      <FontAwesome5
        name={icon}
        size={22}
        color={currentTab === tab ? color.COLOR_MAIN : color.COLOR_GRAY_ICON}
      />
    </Pressable>
  );
};

const MyPageTabBar = ({ currentTab, setCurrentTab }: Props) => {
  return (
    <View style={styles.container}>
      <MyPageInfo />

      <View style={styles.tabWrapper}>
        <MyPageTab
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          tab={"list"}
          icon={"border-all"}
        />

        <MyPageTab
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          tab={"map"}
          icon={"map-marker-alt"}
        />
      </View>
    </View>
  );
};

export default MyPageTabBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: color.COLOR_WHITE_BACKGROUND,
  },
  tabWrapper: {
    flexDirection: "row",
    width: "100%",
  },
  tabBtn: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: color.COLOR_GRAY_BORDER,
    paddingVertical: 10,
  },
});
