import color from "../styles/color";

type ReviewTagId = "tasty" | "costEffi" | "clean" | "kind";

export type ReviewTagType = {
  id: string;
  color: string;
  text: string;
};

function getReviewTagObj(key: ReviewTagId, color: string, text: string) {
  return {
    [key]: {
      id: key,
      color,
      text,
    },
  };
}

export default {
  ...getReviewTagObj("tasty", color.COLOR_REVIEW_TAG.PINK, "맛있어요"),
  ...getReviewTagObj(
    "costEffi",
    color.COLOR_REVIEW_TAG.YELLOW,
    "가성비가 좋아요"
  ),
  ...getReviewTagObj("clean", color.COLOR_REVIEW_TAG.BLUE, "매장이 깨끗해요"),
  ...getReviewTagObj("kind", color.COLOR_REVIEW_TAG.GREEN, "점원이 친절해요"),
};
