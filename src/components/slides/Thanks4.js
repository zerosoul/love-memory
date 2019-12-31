import React from 'react';
import styled from 'styled-components';
import Img from '../../assets/memo/thanks.gp.png';
import Img2 from '../../assets/memo/thanks.gp.2.png';
import Img3 from '../../assets/memo/thanks.gp.3.png';
import MemoImage from '../MemoImage';
const StyledWrapper = styled.div``;
export default function Thanks4() {
  return (
    <StyledWrapper
      id="thanks4"
      className="step"
      data-x="10000"
      data-y="10000"
      data-scale="2"
      data-autoplay="9"
    >
      <MemoImage
        date="2017.06.29"
        img={[Img, Img2, Img3]}
        title="感谢给奶奶的陪伴"
        desc="每次带你回家你都会陪奶奶包饺子，还给奶奶买新衣服，奶奶非常喜欢你，一直在夸你"
      />
    </StyledWrapper>
  );
}
