import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  &::before {
    position: absolute;
    content: attr(data-title);
    background-color: rgba(2, 2, 2, 0.6);
    font-weight: 800;
    top: 0;
    left: -10px;
    display: block;
    padding: 5px 10px;
    transform: rotate('10deg');
  }
  &::after {
    position: absolute;
    content: attr(data-desc);
    background-color: rgba(2, 2, 2, 0.4);
    font-size: 22px;
    bottom: 0;
    left: 0;
    display: block;
    padding: 15px 20px;
  }
  img {
    width: 100%;
  }
`;

export default function MemoImage({ img, title = '', desc = '' }) {
  return (
    <StyledWrapper data-title={title} data-desc={desc}>
      <img src={img} />
    </StyledWrapper>
  );
}
