import React from "react";
import { SafeAreaView, StyleSheet, FlatList, View } from "react-native";

import color from "../styles/color";
import { contentPadding } from "../styles/size";

import Header from "./header/Header";
import { HeaderProps } from "./header/Header";

type Props = {
  children: React.ReactNode;
  header: HeaderProps;
  stickyHeaderIndices?: number[];
  ListHeaderComponent?: React.ReactElement;
};

const MainLayout = ({
  children,
  header,
  stickyHeaderIndices,
  ListHeaderComponent,
}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header options={header} />

      <FlatList
        data={[]}
        renderItem={null}
        ListEmptyComponent={<View style={styles.content}>{children}</View>}
        stickyHeaderIndices={stickyHeaderIndices}
        ListHeaderComponent={ListHeaderComponent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default MainLayout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.COLOR_HEADER,
    width: "100%",
    flex: 1,
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  content: {
    padding: contentPadding,
    paddingBottom: 200,
    width: "100%",
  },
});
