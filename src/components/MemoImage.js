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
    font-weight: 800;
    color: #333;
    top: 0;
    left: 0px;
    padding: 10px 20px;
    z-index: 1;
    transform: rotate(-10deg);
  }
  .desc {
    position: absolute;
    font-size: 22px;
    bottom: 0;
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

      transform: rotate(5deg) scale(0.8);
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
            <div key={idx}>
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
