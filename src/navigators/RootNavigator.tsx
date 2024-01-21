import { createStackNavigator } from "@react-navigation/stack";

import BottomTabNavigator from "./BottomTabNavigator";
import PostScreen from "../screens/post/PostScreen";
import FilterMenuScreen from "../screens/sideMenu/FilterMenuScreen";
import LocationScreen from "../screens/search/LocationScreen";

export type RootStackParamList = {
  CardsListScreen: undefined;
  CameraScreen: undefined;
  MyPageScreen: undefined;
  BottomTabNavigator: undefined;
  PostScreen: { id: string };
  FilterMenuScreen: undefined;
  LocationScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomTabNavigator"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="PostScreen" component={PostScreen} />
      <Stack.Screen
        name="FilterMenuScreen"
        component={FilterMenuScreen}
        options={{
          presentation: "transparentModal",
        }}
      />
      <Stack.Screen name="LocationScreen" component={LocationScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
