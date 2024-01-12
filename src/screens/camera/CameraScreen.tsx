import MainLayout from "../../layout/MainLayout";
import { Text } from "react-native";

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
