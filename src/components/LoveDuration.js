import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import MtlImg from '../assets/memo/mtl.jpg';
const Beat = keyframes`
    0% {
      transform: scale(1) rotate(-45deg);
    }
    50% {
      transform: scale(0.8) rotate(-45deg);
    }
`;
const StyledWrapper = styled.div`
  background-color: #a98175;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 900px;
  border: 1px solid #b36d61;
  border-radius: 10px;
  box-shadow: 0 2px 6px #b36d61;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  padding: 60px;
  .cp {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
    margin: 20px 0 40px 0;
    box-shadow: 0 2px 6px #b36d61;
    img {
      width: 100%;
    }
  }
  .heart {
    margin: 30px 0 20px 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #dc3023;
    height: 100px;
    width: 100px;
    transform: rotate(-45deg);
    animation-name: ${Beat};
    animation-duration: 1.8s;
    animation-iteration-count: infinite;
    &:after {
      background-color: #dc3023;
      content: '';
      border-radius: 50%;
      position: absolute;
      width: 100px;
      height: 100px;
      top: 0px;
      left: 50%;
    }
    &:before {
      background-color: #dc3023;
      content: '';
      border-radius: 50%;
      position: absolute;
      width: 100px;
      height: 100px;
      top: -50%;
      left: 0px;
    }
  }
  .title {
    font-size: 40px;
  }
  .dur {
    letter-spacing: 1px;
    font-weight: 800;
    font-size: 60px;
    .time {
      background-color: rgba(0, 0, 0, 0.3);
      padding: 6px 8px;
    }
    em {
      font-weight: 400;
      letter-spacing: 0;
      margin: 0 4px;
    }
  }
`;
let interInt = null;
const firstTime = new Date('2016-10-10 10:10:00');
export default function LoveDuration() {
  const [duration, setDuration] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    interInt = setInterval(() => {
      let milliseconds = new Date().getTime() - firstTime.getTime();
      const roundTowardsZero = milliseconds > 0 ? Math.floor : Math.ceil;
      let d = roundTowardsZero(milliseconds / 86400000);
      let h = roundTowardsZero(milliseconds / 3600000) % 24;
      let m = roundTowardsZero(milliseconds / 60000) % 60;
      let s = String(roundTowardsZero(milliseconds / 1000) % 60).padStart(2, '0');
      setDuration({
        d,
        h,
        m,
        s
      });
    }, 1000);
    return () => {
      clearInterval(interInt);
    };
  }, []);
  const { d, h, m, s } = duration;
  return (
    <StyledWrapper
      id="love-dur"
      className="step slide"
      data-x="-1000"
      data-y="-1500"
      // data-autoplay="20"
    >
      <div className="heart"></div>
      <div className="cp">
        <img src={MtlImg} alt="摩天轮下" />
      </div>
      <h2 className="title">相遇相伴 相知相爱</h2>
      <div className="dur">
        <span className="time">{d}</span>
        <em>天</em>
        <span className="time">{h}</span>
        <em>小时</em>
        <span className="time">{m}</span>
        <em>分</em>
        <span className="time">{s}</span>
        <em>秒</em>
      </div>
    </StyledWrapper>
  );
}
