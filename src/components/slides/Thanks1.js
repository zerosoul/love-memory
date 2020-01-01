import React from 'react';
import styled from 'styled-components';
import Img from '../../assets/memo/thanks.cooking.png';
import Img1 from '../../assets/memo/eat.1.png';
import Img2 from '../../assets/memo/eat.2.png';
import Img3 from '../../assets/memo/eat.2.png';
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
      data-autoplay="10"
    >
      <MemoImage
        width="40%"
        img={[Img, Img1, Img2, Img3]}
        title="感谢🍚"
        desc="每一次用心准备的饭菜，你做饭，我刷碗，最佳组合。但是还是你最辛苦！"
      />
    </StyledWrapper>
  );
}
