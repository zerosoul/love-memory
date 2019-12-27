import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .start {
    padding: 10px 15px;
  }
`;
export default function StartMask({ startPlay }) {
  const handlePlay = () => {
    // document.querySelector('#BGM').play();
    startPlay();
  };
  return (
    <StyledWrapper>
      <button className="start" onClick={handlePlay}>
        play
      </button>
    </StyledWrapper>
  );
}
