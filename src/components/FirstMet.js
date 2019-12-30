import React from 'react';
import styled from 'styled-components';
import Img from '../assets/memo/first.met.jpg';
import MemoImage from './MemoImage';
const StyledWrapper = styled.div``;
export default function FirstMet() {
  return (
    <StyledWrapper
      id="first-met"
      className="step slide"
      data-x="1000"
      data-y="-1500"
      data-autoplay="7"
    >
      <MemoImage img={Img} title="初识" desc="一起去你常去的玩具店" />
    </StyledWrapper>
  );
}
