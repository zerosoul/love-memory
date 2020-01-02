import React from 'react';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Heart from './Heart';
import Notepaper from './Notepaper';
const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    position: absolute;
    background: rgb(242, 246, 193);
    border: 1px solid rgba(170, 157, 134, 0.5);
    font-size: 25px;
    font-weight: 800;
    color: #333;
    top: 5px;
    left: 0px;
    padding: 10px 30px;
    z-index: 1;
    transform: rotate(-10deg);
    &:before,
    &:after {
      content: '';
      width: 100px;
      height: 20px;
      background: rgba(222, 222, 222, 0.4);
      display: block;
      position: absolute;
    }
    &:before {
      left: -35px;
      top: -3px;
      transform: rotate(-34deg);
    }
    &:after {
      right: -35px;
      bottom: -3px;
      transform: rotate(-44deg);
      width: 80px;
    }
  }
  .desc {
    position: absolute;
    font-size: 22px;
    bottom: -5px;
    right: 0;
    z-index: 2;
    transform: rotate(-5deg);
  }

  .heart {
    position: absolute;
    top: 40%;
    opacity: 0.5;
    transform: rotate(-3deg);
  }
  /* overwrite */
  .carousel .slide {
    background: none;

    img {
      box-shadow: 0 0 8px 2px #a98175;
      border: 10px solid #fff;
      max-width: 500px;
    }
    &:nth-child(odd) img {
      transform: rotate(5deg) scale(0.8);
    }
    &:nth-child(even) img {
      transform: rotate(-5deg) scale(0.8);
    }
  }
`;

export default function MemoImage({ img, title = '', desc = '', date = '' }) {
  const imgs = Array.isArray(img) ? img : [img];
  return (
    <StyledWrapper className="photo">
      {title && <div className="title">{title}</div>}
      {title && <Heart style={{ left: 0 }} size="50px" />}
      {desc && (
        <Heart
          style={{ opacity: '.4', left: 'auto', transform: 'rotate(-70deg)', right: 0 }}
          size="30px"
        />
      )}
      {desc && <Notepaper date={date} content={desc} className="desc"></Notepaper>}
      <Carousel
        transitionTime={300}
        dynamicHeight={true}
        infiniteLoop={true}
        autoPlay={true}
        showArrows={false}
        showIndicators={imgs.length > 1 ? true : false}
        showThumbs={false}
        showStatus={false}
      >
        {imgs.map((item, idx) => {
          return (
            <div key={idx} style={{ minWidth: '300px', minHeight: '500px' }}>
              <img src={item} />
            </div>
          );
        })}
      </Carousel>
      <Heart
        style={{
          opacity: '.3',
          top: '88%',
          left: '-10px',
          transform: 'rotate(-100deg)',
          right: 'auto'
        }}
        size="30px"
      />
    </StyledWrapper>
  );
}
