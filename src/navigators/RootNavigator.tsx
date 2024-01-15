import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabNavigator from "./BottomTabNavigator";
import PostScreen from "../screens/post/PostScreen";

export type RootStackParamList = {
  CardsListScreen: undefined;
  CameraScreen: undefined;
  MyPageScreen: undefined;
  BottomTabNavigator: undefined;
  PostScreen: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomTabNavigator"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="PostScreen" component={PostScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
