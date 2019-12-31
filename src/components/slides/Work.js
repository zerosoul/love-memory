import React from 'react';
import styled from 'styled-components';
import Img from '../../assets/memo/work.jpg';
import Img1 from '../../assets/memo/work.1.png';
import MemoImage from '../MemoImage';
const StyledWrapper = styled.div``;
export default function Work() {
  return (
    <StyledWrapper id="work" className="step slide" data-x="2000" data-y="-1500" data-autoplay="12">
      <MemoImage
        img={[Img, Img1]}
        title="摩天轮&金玫瑰"
        desc='摩天轮没坐成，赶紧做个手工安慰下(ﾉ"◑ ◑)ﾉ"(｡•́︿•̀｡)'
      />
    </StyledWrapper>
  );
}
