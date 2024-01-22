import { Text } from "react-native";

import MainLayout from "../../layout/MainLayout";
import LoginRequiredPage from "../../components/account/LoginRequiredPage";

const CameraScreen = () => {
  return (
    <MainLayout
      header={{
        headerText: "카메라",
      }}
    >
      {/* <Text>Camera</Text> */}
      <LoginRequiredPage />
    </MainLayout>
  );
};

export default CameraScreen;
