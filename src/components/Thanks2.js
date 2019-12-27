import React from 'react';
import styled from 'styled-components';
import Img from '../assets/memo/thanks.eat.png';
import MemoImage from './MemoImage';
const StyledWrapper = styled.div``;
export default function Thanks2() {
  return (
    <StyledWrapper id="thanks2" className="step" data-x="10000" data-y="7000" data-scale="3">
      <MemoImage width="40%" img={Img} title="感谢" desc="每一次精心准备的早餐" />
    </StyledWrapper>
  );
}
