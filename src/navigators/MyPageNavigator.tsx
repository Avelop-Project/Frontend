import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyPageScreen from "../screens/myPage/MyPageScreen";

const Stack = createNativeStackNavigator();
const MyPageNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MyPageScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="MyPageScreen" component={MyPageScreen} />
    </Stack.Navigator>
  );
};

export default MyPageNavigator;
