import React from 'react';
import styled from 'styled-components';
import Img1 from '../../assets/memo/nanjing.1.jpeg';
import Img2 from '../../assets/memo/nanjing.2.jpeg';
import Img3 from '../../assets/memo/nanjing.3.jpeg';
import Img4 from '../../assets/memo/nanjing.4.jpeg';
import Img5 from '../../assets/memo/nanjing.5.jpeg';
import Img6 from '../../assets/memo/nanjing.6.jpeg';
import Img7 from '../../assets/memo/nanjing.7.jpeg';
import Img8 from '../../assets/memo/nanjing.8.jpeg';

import MemoImage from '../MemoImage';

const StyledWrapper = styled.div``;
export default function Xinjiang({ step }) {
  return (
    <StyledWrapper
      id="xinjiang"
      className="step"
      data-x="7000"
      data-y="5000"
      data-scale="3"
      data-autoplay="45"
    >
      {step == 'xinjiang' && (
        <MemoImage title={'新疆之行'} img={[Img3, Img1, Img2, Img4, Img5, Img6, Img7, Img8]} />
      )}
    </StyledWrapper>
  );
}
