import React from 'react';
import styled from 'styled-components';
import Img from '../../assets/memo/thanks.cc.png';
import Img2 from '../../assets/memo/thanks.cc.2.png';
import MemoImage from '../MemoImage';
const StyledWrapper = styled.div``;
export default function Thanks3() {
  return (
    <StyledWrapper
      id="thanks3"
      className="step"
      data-x="10000"
      data-y="9000"
      data-scale="3"
      data-autoplay="6"
    >
      <MemoImage
        date="2018.10.03"
        img={[Img, Img2]}
        title="感谢带给晨晨的快乐"
        desc="感谢给晨晨梳的漂亮小辫，一起拍好玩的美颜照，带给了晨晨很多快乐"
      />
    </StyledWrapper>
  );
}
