import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MemoVideo from '../MemoVideo';
import VideoSrc from '../../assets/memo/leihuaile.mp4';

const StyledWrapper = styled.div``;
const currId = 'video-tired';
export default function VideoTired({ currStep }) {
  const [isCurr, setIsCurr] = useState(false);
  useEffect(() => {
    if (currStep == currId) {
      setIsCurr(true);
    } else {
      setIsCurr(false);
    }
  }, [currStep]);
  return (
    <StyledWrapper
      id={currId}
      className="step slide"
      data-x="9000"
      data-y="5000"
      data-scale="3"
      data-autoplay="15"
    >
      <MemoVideo paused={!isCurr} desc="可把我累坏了~~~" video={VideoSrc} />
    </StyledWrapper>
  );
}
