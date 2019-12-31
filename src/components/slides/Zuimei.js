import React from 'react';
import styled from 'styled-components';
import Img from '../../assets/memo/zuimei.png';
import Img1 from '../../assets/memo/zuimei.1.png';
import Img2 from '../../assets/memo/zuimei.2.png';
import Img3 from '../../assets/memo/zuimei.3.png';
import Img4 from '../../assets/memo/zuimei.4.png';
import Img5 from '../../assets/memo/zuimei.5.png';
import Img6 from '../../assets/memo/zuimei.6.png';
import Img7 from '../../assets/memo/zuimei.7.png';
import Img8 from '../../assets/memo/zuimei.8.png';
import Img9 from '../../assets/memo/zuimei.9.png';
import Img10 from '../../assets/memo/zuimei.10.png';
import MemoImage from '../MemoImage';
const StyledWrapper = styled.div``;
export default function Zuimei({ step }) {
  return (
    <StyledWrapper
      id="zuimei"
      className="step"
      data-x="3000"
      data-y="1500"
      data-z="0"
      data-scale="20"
      data-autoplay="38"
    >
      {step == 'zuimei' && (
        <MemoImage
          img={[Img, Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10]}
          title="最美的你"
          desc="感谢你陪伴我走过这三年<br/>愿余生有一个人，继续守护你..."
        />
      )}
    </StyledWrapper>
  );
}
