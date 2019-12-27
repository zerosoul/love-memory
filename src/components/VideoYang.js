import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MemoVideo from './MemoVideo';
import VideoSrc from '../assets/memo/ygc.mp4';

const StyledWrapper = styled.div``;
const currId = 'video-yang';
export default function VideoYang({ currStep }) {
  const [isCurr, setIsCurr] = useState(false);
  useEffect(() => {
    if (currStep == currId) {
      setIsCurr(true);
    } else {
      setIsCurr(false);
    }
  }, [currStep]);
  return (
    <StyledWrapper id={currId} className="step slide" data-x="6000" data-y="4000" data-scale="2">
      <MemoVideo paused={!isCurr} desc="羊....国！春~~~！" video={VideoSrc} />
    </StyledWrapper>
  );
}
