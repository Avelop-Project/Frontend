import React, { Dispatch, useRef, SetStateAction, useEffect } from "react";

import {
  Modal,
  StyleSheet,
  View,
  Pressable,
  Animated,
  PanResponder,
  FlatList,
  Text,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import color from "../../styles/color";
import { contentPadding, dh } from "../../styles/size";

export type Props = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  heightPercentage?: number;
  children?: React.ReactNode;
  headerText: string;
  ListFooterComponent?: React.ReactElement;
};

const BottomSheet = ({
  visible,
  setVisible,
  heightPercentage,
  headerText,
  ListFooterComponent,
  ...props
}: Props) => {
  const height =
    heightPercentage !== undefined ? heightPercentage * dh : 0.8 * dh;

  const animation = useRef(new Animated.Value(height)).current;

  const openBottomSheet = Animated.timing(animation, {
    toValue: 0,
    duration: 500,
    useNativeDriver: true,
  });

  const closeBottomSheet = Animated.timing(animation, {
    toValue: height,
    duration: 500,
    useNativeDriver: true,
  });

  const panResponders = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,

      //   BottomSheet에 터치 또는 드래그 이벤트가 발생할 때 실행됩니다.
      onPanResponderMove: (event, gestureState) => {
        // 처음 터치 영역을 기준으로 y축으로 드래그한 거리를 panY에 저장합니다.
        animation.setValue(gestureState.dy);
      },
      // 유저가 BottomSheet 손을 뗐을 때 실행됩니다.
      onPanResponderRelease: (event, gestureState) => {
        // 유저가 y축으로 1.5 이상의 속도로 드래그 했을 때 BottomSheet가 닫히도록 조건을 지정했습니다.
        if (gestureState.dy > 0 && gestureState.vy > 1.5) {
          closeModal();
        } else {
          // 위 조건에 부합하지 않으면 BottomSheet의 위치를 초기화 하도록 설계했습니다.
          openBottomSheet.start();
        }
      },
    })
  ).current;

  const closeModal = () => {
    closeBottomSheet.start(() => {
      setVisible(false);
    });
  };

  useEffect(() => {
    if (visible) {
      openBottomSheet.start();
    } else {
      closeModal();
    }
  }, [visible]);

  return (
    <>
      <Modal
        visible={visible}
        animationType="fade"
        transparent
        statusBarTranslucent
      >
        <View style={[StyleSheet.absoluteFill, styles.container]}>
          <Pressable style={styles.background} onPress={closeModal} />

          <Animated.View
            style={[
              styles.view,
              {
                height,
                transform: [
                  {
                    translateY: animation.interpolate({
                      inputRange: [-1, 0, 1],
                      outputRange: [0, 0, 1],
                    }),
                  },
                ],
              },
            ]}
          >
            <Animated.View style={styles.topBox} {...panResponders.panHandlers}>
              <View style={styles.topBar} />
            </Animated.View>

            <View style={styles.header}>
              <Pressable style={styles.headerBtn} onPress={closeModal}>
                <AntDesign name="back" size={25} />
              </Pressable>

              <Text style={styles.headerText}>{headerText}</Text>

              <Pressable style={styles.headerBtn}></Pressable>
            </View>

            <FlatList
              data={[]}
              renderItem={null}
              ListEmptyComponent={
                <View style={styles.content}>{props.children}</View>
              }
              showsVerticalScrollIndicator={false}
              style={styles.flatList}
            />

            {ListFooterComponent}
          </Animated.View>
        </View>
      </Modal>
    </>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.COLOR_TRANSARENT_BACKGROUND,
  },
  background: {
    flex: 1,
  },

  view: {
    width: "100%",
    backgroundColor: color.COLOR_WHITE_BACKGROUND,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  topBox: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 10,
  },
  topBar: {
    width: "20%",
    height: 5,
    borderRadius: 100,
    backgroundColor: color.COLOR_GRAY_BORDER,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  headerBtn: {
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  flatList: {
    flex: 1,
    paddingHorizontal: contentPadding,
  },
  content: {
    flex: 1,
    width: "100%",
    minHeight: "100%",
    paddingBottom: 200,
  },
});
