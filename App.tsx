import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import RootNavigator from "./src/navigators/RootNavigator";

export default function App() {
  return (
    // RN에 내장된 SafeAreaView 로 하면 안됨(탭 자체가 나오지 않음)
    // navigation에서 지원해주는 컴포넌트 사용해야 함
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
