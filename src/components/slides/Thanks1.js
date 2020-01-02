import React from 'react';
import styled from 'styled-components';
import Img9 from '../../assets/memo/eat.9.png';
import Img1 from '../../assets/memo/eat.1.png';
import Img2 from '../../assets/memo/eat.2.png';
import Img3 from '../../assets/memo/eat.3.png';
import Img4 from '../../assets/memo/eat.4.jpeg';
import Img5 from '../../assets/memo/eat.5.png';
import Img6 from '../../assets/memo/eat.6.jpeg';
import Img7 from '../../assets/memo/eat.7.jpeg';
import Img8 from '../../assets/memo/eat.8.jpeg';
import Img10 from '../../assets/memo/eat.10.jpeg';
import MemoImage from '../MemoImage';
const StyledWrapper = styled.div``;
export default function Thanks1() {
  return (
    <StyledWrapper
      id="thanks1"
      className="step"
      data-x="10000"
      data-y="7000"
      data-scale="4"
      data-autoplay="45"
    >
      <MemoImage
        width="40%"
        img={[Img9, Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img10, Img8]}
        title="感谢🍚"
        desc="每一次用心准备的饭菜，你做饭，我刷碗，最佳组合。但还是你最辛苦！"
      />
    </StyledWrapper>
  );
}
