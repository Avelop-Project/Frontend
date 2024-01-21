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
  padding?: number;
};

const MainLayout = ({
  children,
  header,
  stickyHeaderIndices,
  ListHeaderComponent,
  padding,
}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header options={header} />

      <FlatList
        data={[]}
        renderItem={null}
        ListEmptyComponent={
          <View style={[styles.content, padding !== undefined && { padding }]}>
            {children}
          </View>
        }
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
  content: {
    padding: contentPadding,
    flex: 1,
    paddingBottom: 200,
    width: "100%",
  },
});
