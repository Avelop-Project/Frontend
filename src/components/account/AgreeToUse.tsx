import React, { useCallback, useEffect, useRef, useState } from "react";

import { View, StyleSheet, Text, Pressable } from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

import color from "../../styles/color";

interface Data {
  id: string;
  title: string;
  required: boolean;
  contents: string;
}

type Props = {
  data: Data;
};

const AgreeToUse = ({ data }: Props) => {
  const [openContents, setOpenContents] = useState<boolean>(false);
  const [agree, setAgree] = useState<boolean>(false);

  const height = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  });

  const onPress = () => {
    if (openContents) {
      height.value = withTiming(0, { duration: 300 });
    } else {
      height.value = withTiming(250, { duration: 300 });
    }
    setOpenContents(!openContents);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Pressable style={styles.titleWrapper} onPress={() => setAgree(!agree)}>
          <FontAwesome
            name="check-circle"
            size={20}
            color={agree ? color.COLOR_MAIN : color.COLOR_GRAY_ICON}
          />
          <Text style={styles.title}>{data.title}</Text>
          <Text
            style={{
              color: data.required
                ? color.COLOR_BLUE_TEXT
                : color.COLOR_GRAY_TEXT,
            }}
          >
            {data.required ? "(필수)" : "(선택)"}
          </Text>
        </Pressable>

        <Pressable onPress={onPress}>
          <FontAwesome5
            name={openContents ? "chevron-up" : "chevron-down"}
            size={18}
            color={color.COLOR_GRAY_ICON}
          />
        </Pressable>
      </View>

      <Animated.ScrollView
        style={[styles.contentsWrapper, animatedStyle]}
        contentContainerStyle={{ padding: 10 }}
      >
        <Text style={styles.contents}>{data.contents}</Text>
      </Animated.ScrollView>
    </View>
  );
};

export default AgreeToUse;

const styles = StyleSheet.create({
  container: {},
  wrapper: {
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  contentsWrapper: {
    backgroundColor: color.COLOR_LIGHTGRAY_BACKGROUND,
    borderRadius: 5,
    marginBottom: 10,
  },
  contents: {
    fontSize: 14,
    lineHeight: 24,
  },
});
