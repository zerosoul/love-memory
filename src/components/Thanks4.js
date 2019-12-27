import React from 'react';
import styled from 'styled-components';
import Img from '../assets/memo/thanks.gp.png';
import MemoImage from './MemoImage';
const StyledWrapper = styled.div``;
export default function Thanks4() {
  return (
    <StyledWrapper id="thanks4" className="step" data-x="10000" data-y="9000" data-scale="2">
      <MemoImage width="40%" img={Img} title="感谢" desc="给奶奶买的新衣服" />
    </StyledWrapper>
  );
}
