import React from 'react';
import styled from 'styled-components';
import Img from '../assets/memo/first.met.jpg';
import MemoImage from './MemoImage';
const StyledWrapper = styled.div`
  background-color: #a98175;
`;
export default function FirstMet() {
  return (
    <StyledWrapper
      id="first-met"
      className="step slide"
      data-x="-0"
      data-y="-1500"
      // data-autoplay="5"
    >
      <MemoImage img={Img} title="初识" desc="一起去你常去的玩具店" />
    </StyledWrapper>
  );
}
