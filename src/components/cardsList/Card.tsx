import styled, { css } from "styled-components/native";
import { Pressable, Image, StyleSheet } from "react-native";

import useStackNavigation from "../../hooks/useStackNavigation";

import color from "../../styles/color";
import { contentWidth, contentPadding } from "../../styles/size";

const cardSizeCode = {
  Small: "small",
  Medium: "medium",
  Big: "big",
} as const;
type CardSizeType = (typeof cardSizeCode)[keyof typeof cardSizeCode];

type Props = {
  size: CardSizeType;
};

const Card = ({ size }: Props) => {
  const navigation = useStackNavigation();

  const onPress = () => {
    navigation.navigate("PostScreen", { id: "id" });
  };

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <CardImg
        size={size}
        source={require("../../../assets/img/food_img.png")}
      />
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    overflow: "hidden",
  },
});

const CardImg = styled(Image)<Props>`
  ${({ size }) => {
    let len = contentWidth;
    if (size === cardSizeCode.Big) {
      len = (2 * len - contentPadding) / 3;
    } else if (size === cardSizeCode.Medium) {
      len = (len - contentPadding * 2) / 3;
    } else if (size === cardSizeCode.Small) {
      len = (len - contentPadding * 2) / 3;
    }

    return css`
      width: ${len};
      height: ${len};
    `;
  }}
  object-fit: cover;
`;
