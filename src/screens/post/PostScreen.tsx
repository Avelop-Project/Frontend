import { View, Text } from "react-native";

import usePostRoute from "../../hooks/usePostRoute";

import MainLayout from "../../layout/MainLayout";
import ContentLayout from "../../layout/ContentLayout";

const PostScreen = () => {
  const route = usePostRoute();

  return (
    <MainLayout
      header={{
        headerText: "게시글",
        headerLeft: { type: "back" },
        headerRight: { type: "cog" },
      }}
    >
      <ContentLayout>
        <Text>post screen</Text>
      </ContentLayout>
    </MainLayout>
  );
};

export default PostScreen;
