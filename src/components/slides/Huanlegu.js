import React from 'react';
import styled from 'styled-components';
import Img0 from '../../assets/memo/youlechang.0.png';
import Img1 from '../../assets/memo/youlechang.1.png';
import Img2 from '../../assets/memo/youlechang.2.png';
import Img3 from '../../assets/memo/youlechang.3.png';
import MemoImage from '../MemoImage';

const StyledWrapper = styled.div``;
export default function Huanlegu({ step }) {
  return (
    <StyledWrapper
      id="huanlegu"
      className="step"
      data-x="6700"
      data-y="-300"
      data-scale="6"
      data-autoplay="16"
    >
      {step == 'huanlegu' && (
        <MemoImage
          img={[Img0, Img1, Img2, Img3]}
          title="欢乐谷"
          date="2016.10.21"
          desc="一起去欢乐谷，在你的威逼利诱下，我成功挑战了跳楼机~~~"
        />
      )}
    </StyledWrapper>
  );
}
