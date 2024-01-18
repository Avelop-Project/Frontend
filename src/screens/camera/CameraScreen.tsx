import { Text } from "react-native";

import MainLayout from "../../layout/MainLayout";

const CameraScreen = () => {
  return (
    <MainLayout
      header={{
        headerText: "카메라",
      }}
    >
      <Text>Camera</Text>
    </MainLayout>
  );
};

export default CameraScreen;
