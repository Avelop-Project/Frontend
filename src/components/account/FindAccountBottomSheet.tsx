import React, { Dispatch, SetStateAction } from "react";

import BottomSheet from "../../layout/bottomSheet/BottomSheet";
import BottomButton from "../../components/common/BottomButton";

import color from "../../styles/color";

type Props = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

const FindAccountBottomSheet = ({ visible, setVisible }: Props) => {
  return (
    <>
      <BottomSheet
        visible={visible}
        setVisible={setVisible}
        headerText="아이디 찾기"
      ></BottomSheet>
    </>
  );
};

export default FindAccountBottomSheet;
