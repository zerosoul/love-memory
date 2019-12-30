import React from 'react';
import styled from 'styled-components';
import Img1 from '../assets/memo/pair.toy.jpg';
// import Img2 from '../assets/memo/datoutie.png';
import MemoImage from './MemoImage';
const StyledWrapper = styled.div`
  /* display: flex; */
`;
export default function PairPhoto() {
  return (
    <StyledWrapper
      id="pair"
      className="step"
      data-x="0"
      data-y="0"
      data-scale="4"
      data-autoplay="6"
    >
      <MemoImage
        img={Img1}
        title="一对儿"
        desc="你说粉色的猪是你，我说小熊猫才是你，因为熊猫是稀有物种，于千千万人中，我才遇到你。"
      />
    </StyledWrapper>
  );
}
