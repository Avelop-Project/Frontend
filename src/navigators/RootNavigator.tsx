import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomTabNavigator"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
