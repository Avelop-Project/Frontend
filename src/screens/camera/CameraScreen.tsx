import { Text } from "react-native";

import MainLayout from "../../layout/MainLayout";
import ContentLayout from "../../layout/ContentLayout";

const CameraScreen = () => {
  return (
    <MainLayout
      header={{
        headerText: "카메라",
      }}
    >
      <ContentLayout>
        <Text>Camera</Text>
      </ContentLayout>
    </MainLayout>
  );
};

export default CameraScreen;
