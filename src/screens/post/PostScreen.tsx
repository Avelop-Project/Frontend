import { View, Text } from "react-native";

import usePostRoute from "../../hooks/usePostRoute";

import MainLayout from "../../layout/MainLayout";

const PostScreen = () => {
  const route = usePostRoute();
  console.log(route.params.id);

  return (
    <MainLayout
      header={{
        headerText: "게시글",
        headerLeft: { type: "back" },
        headerRight: { type: "cog" },
      }}
    >
      <Text>post screen</Text>
    </MainLayout>
  );
};

export default PostScreen;
