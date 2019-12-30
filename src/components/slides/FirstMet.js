import React from 'react';
import styled from 'styled-components';
import Img from '../../assets/memo/first.met.jpg';
import MemoImage from '../MemoImage';
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
      <MemoImage
        img={Img}
        title="初识"
        date="2016.10.21"
        desc="一起去你常去的玩具店：酷乐潮玩。每次去都有新的发现，我们买了很多拼图，各种小玩意儿~~~"
      />
    </StyledWrapper>
  );
}
