import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CameraScreen from "../screens/camera/CameraScreen";

const Stack = createNativeStackNavigator();

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
