import React from 'react';
import styled from 'styled-components';
import Img from '../../assets/memo/xiufa.2.png';
import MemoImage from '../MemoImage';
const StyledWrapper = styled.div``;
export default function Behind({ step }) {
  return (
    <StyledWrapper
      id="beiying"
      className="step"
      data-x="3500"
      data-y="-850"
      data-z="0"
      data-rotate="270"
      data-scale="6"
      data-autoplay="10"
    >
      {step == 'beiying' && (
        <MemoImage img={Img} title="洋娃娃背影" desc="后来，直发改成了卷发，更洋气了，依然漂亮~" />
      )}
    </StyledWrapper>
  );
}
