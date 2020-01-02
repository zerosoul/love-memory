import React from 'react';
import styled from 'styled-components';
import Img2 from '../../assets/memo/wuyuan.2.jpeg';
import Img3 from '../../assets/memo/wuyuan.3.jpeg';
import Img4 from '../../assets/memo/wuyuan.4.jpeg';
import Img5 from '../../assets/memo/wuyuan.5.jpeg';
import Img6 from '../../assets/memo/wuyuan.6.jpeg';
import Img7 from '../../assets/memo/wuyuan.7.jpeg';
import Img8 from '../../assets/memo/wuyuan.8.jpeg';
import Img9 from '../../assets/memo/wuyuan.9.jpeg';
import Img10 from '../../assets/memo/wuyuan.10.jpeg';
import Img11 from '../../assets/memo/wuyuan.11.jpeg';
import Img12 from '../../assets/memo/wuyuan.12.jpeg';
import Img13 from '../../assets/memo/wuyuan.13.jpeg';
import Img14 from '../../assets/memo/wuyuan.14.jpeg';
import Img15 from '../../assets/memo/wuyuan.15.jpeg';
import Img16 from '../../assets/memo/wuyuan.16.jpeg';
import Img17 from '../../assets/memo/wuyuan.17.jpeg';
import Img18 from '../../assets/memo/wuyuan.18.jpeg';
import Img19 from '../../assets/memo/wuyuan.19.jpeg';
import Img20 from '../../assets/memo/wuyuan.20.jpeg';
import Img21 from '../../assets/memo/wuyuan.21.jpeg';
import Img22 from '../../assets/memo/wuyuan.22.jpeg';
import Img23 from '../../assets/memo/wuyuan.23.jpeg';
import Img24 from '../../assets/memo/wuyuan.24.jpeg';
import Img25 from '../../assets/memo/wuyuan.25.jpeg';
import Img26 from '../../assets/memo/wuyuan.26.jpeg';
import Img27 from '../../assets/memo/wuyuan.27.jpeg';
import Img28 from '../../assets/memo/wuyuan.28.jpeg';
import Img29 from '../../assets/memo/wuyuan.29.jpeg';
import MemoImage from '../MemoImage';

const StyledWrapper = styled.div``;
export default function Wuyuan({ step }) {
  return (
    <StyledWrapper
      id="wuyuan"
      className="step"
      data-x="7000"
      data-y="5000"
      data-scale="2"
      data-autoplay="140"
    >
      {step == 'wuyuan' && (
        <MemoImage
          title={'在婺源'}
          img={[
            Img3,
            Img2,
            Img4,
            Img5,
            Img6,
            Img7,
            Img8,
            Img9,
            Img10,
            Img11,
            Img12,
            Img13,
            Img14,
            Img15,
            Img16,
            Img17,
            Img18,
            Img19,
            Img20,
            Img21,
            Img22,
            Img23,
            Img24,
            Img25,
            Img26,
            Img27,
            Img28,
            Img29
          ]}
        />
      )}
    </StyledWrapper>
  );
}
