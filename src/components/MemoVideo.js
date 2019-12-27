import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import PlayImage from '../assets/img/play.svg';

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin: 0 auto;
  background-color: #fff;
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
  video {
    box-shadow: 0 0 8px 2px #a98175;
    border: 4px solid #fff;
    width: 100%;
  }
  .play {
    background: rgba(255, 255, 255, 0.6);
    cursor: pointer;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export default function MemoVideo({ video, title = '', desc = '' }) {
  const videoEle = useRef(null);
  const [play, setPlay] = useState(false);
  const handleClick = () => {
    setPlay(true);
    videoEle.current.play();
  };
  return (
    <StyledWrapper className="video">
      {title && <div className="title">{title}</div>}
      {desc && <div className="desc">{desc}</div>}
      <video ref={videoEle} loop src={video} controls={false} />
      {!play && (
        <div onClick={handleClick} className="play">
          <img src={PlayImage} />
        </div>
      )}
    </StyledWrapper>
  );
}
