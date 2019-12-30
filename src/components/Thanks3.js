import React from 'react';
import styled from 'styled-components';
import Img from '../assets/memo/thanks.cc.png';
import MemoImage from './MemoImage';
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
      <MemoImage width="40%" img={Img} title="感谢" desc="给晨晨梳出漂亮的小辫" />
    </StyledWrapper>
  );
}
