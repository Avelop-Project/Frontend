import { View, Text, StyleSheet, Pressable } from "react-native";

import { globalStyle } from "../../styles/global";
import color from "../../styles/color";

import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const headerItemCode = {
  Back: "back",
  Cog: "cog",
  Complete: "complete",
  Map: "map",
  Filter: "filter",
} as const;

type HeaderItemType = (typeof headerItemCode)[keyof typeof headerItemCode];

type HeaderItemProps = {
  type?: HeaderItemType;
  onClick?: () => void;
};

export type HeaderProps = {
  headerText: string;
  headerLeft?: HeaderItemProps;
  headerRight?: HeaderItemProps;
};

type Props = {
  options: HeaderProps;
};

const HeaderItem = ({ type, onClick }: HeaderItemProps) => {
  const navigation = useNavigation();

  const onPress = () => {
    if (type === headerItemCode.Back) {
      navigation.goBack();
    } else {
      if (onClick) onClick();
    }
  };
  return (
    <Pressable style={styles.headerItem} onPress={onPress}>
      {type === headerItemCode.Map ? (
        <FontAwesome5 name="map-marker-alt" size={22} />
      ) : type === headerItemCode.Cog ? (
        <FontAwesome5 name="cog" size={22} />
      ) : type === headerItemCode.Complete ? (
        <Text style={styles.completeText}>완료</Text>
      ) : type === headerItemCode.Back ? (
        <AntDesign name="back" size={25} />
      ) : type === headerItemCode.Filter ? (
        <FontAwesome5 name="bars" size={22} />
      ) : null}
    </Pressable>
  );
};

const Header = ({ options }: Props) => {
  return (
    <View style={styles.container}>
      <HeaderItem
        type={options.headerLeft?.type}
        onClick={options.headerLeft?.onClick}
      />

      <Text style={styles.headerText}>{options.headerText}</Text>

      <HeaderItem
        type={options.headerRight?.type}
        onClick={options.headerRight?.onClick}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.COLOR_HEADER,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    ...globalStyle.boxShadow,
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  headerItem: {
    minHeight: 45,
    minWidth: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  completeText: {
    color: color.COLOR_BLUE_TEXT,
    fontWeight: "bold",
    fontSize: 16,
  },
});
