import React from 'react';
import styled from 'styled-components';
import Img from '../assets/memo/thanks.cooking.png';
import MemoImage from './MemoImage';
const StyledWrapper = styled.div``;
export default function Thanks1() {
  return (
    <StyledWrapper
      id="thanks1"
      className="step"
      data-x="10000"
      data-y="7000"
      data-scale="4"
      data-autoplay="6"
    >
      <MemoImage width="40%" img={Img} title="感谢" desc="每一次用心准备的饭菜" />
    </StyledWrapper>
  );
}
