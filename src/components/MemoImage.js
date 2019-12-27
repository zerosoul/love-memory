import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    position: absolute;
    background-color: rgba(2, 2, 2, 0.8);
    font-weight: 800;
    top: 0;
    left: 0px;
    padding: 10px;
    z-index: 1;
    transform: rotate(-10deg);
  }
  .desc {
    position: absolute;
    background-color: rgba(2, 2, 2, 0.6);
    font-size: 22px;
    bottom: 0;
    right: 0;
    padding: 15px;
    z-index: 2;
    transform: rotate(-5deg);
  }
  img {
    box-shadow: 0 0 8px 2px #a98175;
    border: 10px solid #fff;
    transform: rotate(5deg);
    width: 60%;
  }
`;

export default function MemoImage({ img, title = '', desc = '', width = '60%' }) {
  return (
    <StyledWrapper className="photo">
      {title && <div className="title">{title}</div>}
      {desc && <div className="desc">{desc}</div>}
      <img style={{ width }} src={img} />
    </StyledWrapper>
  );
}
