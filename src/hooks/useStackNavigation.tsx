import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigators/RootNavigator";

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const useStackNavigation = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  return navigation;
};

export default useStackNavigation;
