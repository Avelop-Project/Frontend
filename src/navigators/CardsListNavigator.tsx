import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CardsListScreen from "../screens/cardsList/CardsListScreen";

const Stack = createNativeStackNavigator();
const CardsListNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="CardsListScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="CardsListScreen" component={CardsListScreen} />
    </Stack.Navigator>
  );
};

export default CardsListNavigator;
