import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigators/RootNavigator";

const usePostRoute = () => {
  type PostScreenProp = RouteProp<RootStackParamList, "PostScreen">;

  const route = useRoute<PostScreenProp>();

  return route;
};

export default usePostRoute;
