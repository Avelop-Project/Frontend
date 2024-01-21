import { createStackNavigator } from "@react-navigation/stack";
import CameraScreen from "../screens/camera/CameraScreen";

const Stack = createStackNavigator();

const CameraNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="CameraScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{ title: "카메라" }}
      />
    </Stack.Navigator>
  );
};

export default CameraNavigator;
