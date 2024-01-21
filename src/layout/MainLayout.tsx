import React from "react";
import { SafeAreaView, StyleSheet, FlatList, View } from "react-native";

import color from "../styles/color";
import { contentPadding, dh } from "../styles/size";

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

      {ListHeaderComponent}

      <FlatList
        data={[]}
        renderItem={null}
        ListEmptyComponent={
          <View
            style={[
              styles.content,
              padding !== undefined
                ? { padding }
                : {
                    padding: contentPadding,
                    paddingBottom: 200,
                  },
            ]}
          >
            {children}
          </View>
        }
        stickyHeaderIndices={stickyHeaderIndices}
        // ListHeaderComponent={ListHeaderComponent}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
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
    width: "100%",
    flex: 1,
    minHeight: "100%",
  },
});
