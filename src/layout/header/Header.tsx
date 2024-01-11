import { View, Text, StyleSheet, Pressable } from "react-native";

import { globalStyle } from "../../styles/global";
import color from "../../styles/color";

type HeaderItemProps = {
  type?: string;
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
  return <Pressable style={styles.headerItem}></Pressable>;
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
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  headerItem: {
    height: 45,
    width: 45,
  },
});
