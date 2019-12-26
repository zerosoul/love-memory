import React from 'react';
import styled from 'styled-components';
import Img from '../assets/memo/work.jpg';
import MemoImage from './MemoImage';
const StyledWrapper = styled.div`
  background-color: #a98175;
`;
export default function Work() {
  return (
    <StyledWrapper
      id="work"
      className="step slide"
      data-x="1000"
      data-y="-1500"
      // data-autoplay="5"
    >
      <MemoImage
        img={Img}
        title="拼图，我的第一次给你了"
        desc='摩天轮没坐成，赶紧拼个图安慰下(ﾉ"◑ ◑)ﾉ"(｡•́︿•̀｡)'
      />
    </StyledWrapper>
  );
}
