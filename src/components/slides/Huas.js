import React from 'react';
import styled from 'styled-components';
import Img1 from '../../assets/memo/hua.1.png';
import Img2 from '../../assets/memo/hua.2.png';
import Img3 from '../../assets/memo/hua.3.png';
import Img4 from '../../assets/memo/hua.4.png';
import Img5 from '../../assets/memo/hua.5.png';
import Img6 from '../../assets/memo/hua.6.png';
import Img7 from '../../assets/memo/hua.7.png';
import Img8 from '../../assets/memo/hua.8.png';
import MemoImage from '../MemoImage';
const StyledWrapper = styled.div``;
export default function Huas({ step }) {
  return (
    <StyledWrapper
      id="huas"
      className="step"
      data-x="7000"
      data-y="4000"
      data-scale="2"
      data-autoplay="40"
    >
      {step == 'huas' && (
        <MemoImage
          title={'花一样的你，猪一样的我'}
          img={[Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8]}
        />
      )}
    </StyledWrapper>
  );
}
