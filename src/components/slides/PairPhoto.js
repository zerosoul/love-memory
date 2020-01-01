import React from 'react';
import styled from 'styled-components';
import Img1 from '../../assets/memo/pair.toy.jpg';
import MemoImage from '../MemoImage';
const StyledWrapper = styled.div`
  /* display: flex; */
`;
export default function PairPhoto({ step }) {
  return (
    <StyledWrapper
      id="pair"
      className="step"
      data-x="0"
      data-y="0"
      data-scale="4"
      data-autoplay="10"
    >
      {step == 'pair' && (
        <MemoImage
          img={Img1}
          date="2016.11.01"
          title="一对儿👫"
          desc="你说粉色的猪是你，我说小熊猫才是你，因为熊猫是稀有的，于千千万人中，我才遇到你。"
        />
      )}
    </StyledWrapper>
  );
}
