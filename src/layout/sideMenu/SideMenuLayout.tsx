import React, { useCallback, useState } from "react";

import {
  StyleSheet,
  Pressable,
  View,
  Animated,
  SafeAreaView,
  LayoutChangeEvent,
  Text,
  FlatList,
} from "react-native";
import { useCardAnimation } from "@react-navigation/stack";
import useStackNavigation from "../../hooks/useStackNavigation";
import { Feather } from "@expo/vector-icons";

import color from "../../styles/color";
import { contentPadding, dh, dw } from "../../styles/size";

type Props = {
  children: React.ReactNode;
  headerText: string;
};

const SideMenuLayout = (props: Props) => {
  const navigation = useStackNavigation();
  const { current } = useCardAnimation();
  const [width, setWidth] = useState<number>(0);

  const onLayout = useCallback((e: LayoutChangeEvent) => {
    const { width } = e.nativeEvent.layout;
    setWidth(width);
  }, []);

  const goBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <View style={styles.container}>
      <Pressable
        style={[
          StyleSheet.absoluteFill,
          {
            backgroundColor: color.COLOR_TRANSARENT_BACKGROUND,
          },
        ]}
        onPress={goBack}
      />

      {/* 사이드 메뉴 */}
      <Animated.View
        style={[
          styles.menu,
          {
            transform: [
              {
                translateX: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [width, 0],
                  extrapolate: "identity",
                }),
              },
            ],
          },
        ]}
        onLayout={onLayout}
      >
        <SafeAreaView>
          <View style={styles.menuHeader}>
            <Pressable onPress={goBack} style={styles.headerItem}>
              <Feather name="x" color={color.COLOR_GRAY_ICON} size={22} />
            </Pressable>

            <Text style={styles.headerText}>{props.headerText}</Text>

            <View style={styles.headerItem}></View>
          </View>

          <FlatList
            data={[]}
            renderItem={null}
            ListEmptyComponent={<View>{props.children}</View>}
            showsVerticalScrollIndicator={false}
          />
        </SafeAreaView>
      </Animated.View>
    </View>
  );
};

export default SideMenuLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: dw,
    height: dh,
    flexDirection: "row-reverse",
  },
  menu: {
    backgroundColor: color.COLOR_WHITE_BACKGROUND,
    width: "80%",
    padding: contentPadding,
  },
  menuHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: color.COLOR_GRAY_BORDER,
    marginBottom: contentPadding,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  headerItem: {
    minHeight: 45,
    minWidth: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  menuContent: {},
});
