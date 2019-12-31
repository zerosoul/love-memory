import React from 'react';
import styled from 'styled-components';
import Img0 from '../../assets/memo/bf.1.png';
import Img1 from '../../assets/memo/bf.4.jpg';
import Img2 from '../../assets/memo/bf.2.jpg';
import Img3 from '../../assets/memo/bf.3.jpg';
import MemoImage from '../MemoImage';
const StyledWrapper = styled.div``;
export default function Thanks2({ step }) {
  return (
    <StyledWrapper
      id="thanks2"
      className="step"
      data-x="10000"
      data-y="8000"
      data-scale="3"
      data-autoplay="20"
    >
      {step == 'thanks2' && (
        <MemoImage img={[Img0, Img1, Img2, Img3]} title="感谢" desc="每一次精心准备的早餐" />
      )}
    </StyledWrapper>
  );
}
