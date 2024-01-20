import { useState } from "react";
import { Pressable, Text, StyleSheet } from "react-native";

import color from "../../styles/color";
import { ReviewTagType } from "../../constants/reviewTag";

type Props = {
  reviewTag: ReviewTagType;
  outlined?: boolean;
};

const ReviewTag = ({ reviewTag, outlined }: Props) => {
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
            : reviewTag.color,
          borderColor: reviewTag.color,
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          selected && {
            fontWeight: "bold",
            color: outlined ? reviewTag.color : color.COLOR_WHITE_TEXT,
          },
        ]}
      >
        {reviewTag.text}
      </Text>
    </Pressable>
  );
};

export default ReviewTag;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.COLOR_NOT_SELECTED_FILTER,
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 5,
    borderColor: color.COLOR_NOT_SELECTED_FILTER,
    borderWidth: 1.5,
  },
  text: {
    color: color.COLOR_GRAY_TEXT,
    fontSize: 16,
  },
});
