import React, { useCallback, useEffect, useRef, useState } from "react";

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

import RoundButton, {
  Props as BtnProps,
} from "../../components/common/RoundButton";

type Props = {
  children: React.ReactNode;
  headerText: string;
  btn?: BtnProps;
  headerRight?: React.ReactElement;
};

const SideMenuLayout = (props: Props) => {
  const navigation = useStackNavigation();
  const [width, setWidth] = useState<number>(0);
  const animation = useRef(new Animated.Value(0)).current;

  const onLayout = (e: LayoutChangeEvent) => {
    const { width } = e.nativeEvent.layout;
    setWidth(width);
    animation.setValue(width);
  };

  const openMenu = Animated.timing(animation, {
    toValue: 0,
    duration: 500,
    useNativeDriver: true,
  });
  const closeMenu = Animated.timing(animation, {
    toValue: width,
    duration: 500,
    useNativeDriver: true,
  });

  const goBack = () => {
    closeMenu.start(() => {
      navigation.goBack();
    });
  };

  useEffect(() => {
    if (width) {
      openMenu.start();
    }
  }, [width]);

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
                translateX: animation.interpolate({
                  inputRange: [-1, 0, 1],
                  outputRange: [0, 0, 1],
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

            <View style={styles.headerItem}>{props.headerRight}</View>
          </View>

          <FlatList
            data={[]}
            renderItem={null}
            ListEmptyComponent={
              <View style={styles.menuContent}>{props.children}</View>
            }
            showsVerticalScrollIndicator={false}
          />
        </SafeAreaView>

        {props.btn && (
          <RoundButton
            text={props.btn.text}
            background={props.btn.background}
            onPress={props.btn.onPress}
          />
        )}
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
  },
  menuHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: color.COLOR_GRAY_BORDER,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  headerItem: {
    minHeight: 45,
    minWidth: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  menuContent: {
    // padding: contentPadding,
    padding: 15,
    paddingBottom: 200,
  },
});
