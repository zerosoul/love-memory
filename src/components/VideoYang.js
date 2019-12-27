import React from 'react';
import styled from 'styled-components';
import MemoVideo from './MemoVideo';
import VideoSrc from '../assets/memo/ygc.mp4';

const StyledWrapper = styled.div``;
export default function FirstMet() {
  return (
    <StyledWrapper
      id="video-yang"
      className="step slide"
      data-x="6000"
      data-y="4000"
      data-scale="2"
    >
      <MemoVideo desc="羊....国！春~~~！" video={VideoSrc} />
    </StyledWrapper>
  );
}
