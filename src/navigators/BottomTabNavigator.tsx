import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Entypo, FontAwesome5 } from "@expo/vector-icons";

import CardsListNavigator from "./CardsListNavigator";
import CameraNavigator from "./CameraNavigator";
import MyPageNavigator from "./MyPageNavigator";

import color from "../styles/color";

const TabBar = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <TabBar.Navigator
      initialRouteName="CardsList"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: color.COLOR_WHITE_BACKGROUND,
          height: 80,
          borderTopWidth: 2,
          borderTopColor: color.COLOR_MAIN,
        },
        tabBarItemStyle: {
          marginBottom: 5,
          marginTop: 5,
          height: 50,
        },
        headerShown: false,
      }}
    >
      <TabBar.Screen
        name="CardsList"
        component={CardsListNavigator}
        options={{
          tabBarLabel: "둘러보기",
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="home"
              size={28}
              color={focused ? color.COLOR_MAIN : color.COLOR_TAB_BAR_ICON}
            />
          ),
        }}
      />
      <TabBar.Screen
        name="Camera"
        component={CameraNavigator}
        options={{
          tabBarLabel: "카메라",
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="camera"
              size={28}
              color={focused ? color.COLOR_MAIN : color.COLOR_TAB_BAR_ICON}
            />
          ),
        }}
      />
      <TabBar.Screen
        name="MyPage"
        component={MyPageNavigator}
        options={{
          tabBarLabel: "마이페이지",
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="user-alt"
              size={25}
              color={focused ? color.COLOR_MAIN : color.COLOR_TAB_BAR_ICON}
            />
          ),
        }}
      />
    </TabBar.Navigator>
  );
};

export default BottomTabNavigator;
