import React from 'react';
import styled from 'styled-components';
import Img from '../../assets/memo/first.met.jpg';
import Img2 from '../../assets/memo/datoutie.png';
import Img3 from '../../assets/memo/chushi.png';

import MemoImage from '../MemoImage';
const StyledWrapper = styled.div``;
export default function FirstMet({ step }) {
  return (
    <StyledWrapper
      id="first-met"
      className="step slide"
      data-x="1000"
      data-y="-1500"
      data-autoplay="12"
    >
      {step == 'first-met' && (
        <MemoImage
          img={[Img, Img2, Img3]}
          title="初识"
          date="2016.10.21"
          desc="一起去你常去的玩具店：酷乐潮玩。每次去都有新的发现，我们买了很多拼图，各种小玩意儿，还拍了大头贴~"
        />
      )}
    </StyledWrapper>
  );
}
