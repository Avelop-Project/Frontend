import { useState } from "react";
import { Pressable, Text, StyleSheet } from "react-native";

import color from "../../styles/color";

type Props = {
  name: string;
  outlined?: boolean;
};

const FilterItem = ({ name, outlined }: Props) => {
  const [selected, setSelected] = useState(false);

  const onPress = () => {
    setSelected(!selected);
  };

  return (
    <Pressable
      style={[
        styles.container,
        selected && {
          backgroundColor: outlined
            ? color.COLOR_WHITE_BACKGROUND
            : color.COLOR_MAIN,
          borderColor: color.COLOR_MAIN,
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          selected && {
            fontWeight: "bold",
            color: outlined ? color.COLOR_MAIN : color.COLOR_WHITE_TEXT,
          },
        ]}
      >
        {name}
      </Text>
    </Pressable>
  );
};

export default FilterItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.COLOR_NOT_SELECTED_FILTER,
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 100,
    borderColor: color.COLOR_NOT_SELECTED_FILTER,
    borderWidth: 1.5,
    marginHorizontal: 5,
    marginVertical: 3,
  },
  text: {
    color: color.COLOR_GRAY_TEXT,
    fontSize: 16,
  },
});
