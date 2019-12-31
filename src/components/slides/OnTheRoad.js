import React from 'react';
import styled from 'styled-components';
import Img1 from '../../assets/memo/ontheroad.1.png';
import Img2 from '../../assets/memo/ontheroad.2.png';
import Img3 from '../../assets/memo/ontheroad.3.png';
import Img4 from '../../assets/memo/ontheroad.4.png';
import Img5 from '../../assets/memo/ontheroad.5.png';
import Img6 from '../../assets/memo/ontheroad.6.png';
import Img7 from '../../assets/memo/ontheroad.7.png';
import MemoImage from '../MemoImage';

const StyledWrapper = styled.div``;
export default function OnTheRoad() {
  return (
    <StyledWrapper
      id="ontheroad"
      className="step"
      data-x="7000"
      data-y="5000"
      data-scale="1"
      data-autoplay="15"
    >
      <MemoImage title={'那些次的在路上...'} img={[Img1, Img2, Img3, Img4, Img5, Img6, Img7]} />
    </StyledWrapper>
  );
}
