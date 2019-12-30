import React from 'react';
import styled from 'styled-components';
import Img from '../assets/memo/work.jpg';
import MemoImage from './MemoImage';
const StyledWrapper = styled.div``;
export default function Work() {
  return (
    <StyledWrapper id="work" className="step slide" data-x="2000" data-y="-1500" data-autoplay="6">
      <MemoImage
        img={Img}
        title="第一次送你的拼图"
        desc='摩天轮没坐成，赶紧拼个图安慰下(ﾉ"◑ ◑)ﾉ"(｡•́︿•̀｡)'
      />
    </StyledWrapper>
  );
}
