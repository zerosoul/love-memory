import React from 'react';
import styled from 'styled-components';
import Img from '../../assets/memo/cloth.png';
import MemoImage from '../MemoImage';
const StyledWrapper = styled.div``;
export default function Cloth({ step }) {
  return (
    <StyledWrapper
      id="cloth"
      className="step"
      data-x="3500"
      data-y="-850"
      data-z="0"
      data-rotate="100"
      data-scale="4"
      data-autoplay="10"
    >
      {step == 'cloth' && (
        <MemoImage img={Img} title="亲子装" desc="那天我们一起逛动物园，碰到一个和你穿一样衣服的小朋友~<br/>超可爱~" />
      )}
    </StyledWrapper>
  );
}
