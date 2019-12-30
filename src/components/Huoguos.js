import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Img2 from '../assets/memo/huoguo.2.png';
import Img3 from '../assets/memo/huoguo.3.png';
import Img4 from '../assets/memo/huoguo.4.png';
import Img5 from '../assets/memo/huoguo.5.png';
import Img6 from '../assets/memo/huoguo.6.png';
import Img7 from '../assets/memo/huoguo.7.png';
import Img8 from '../assets/memo/huoguo.8.png';
import Img9 from '../assets/memo/huoguo.9.png';
const StyledWrapper = styled.div`
  /* display: flex; */
  /* width: 650px !important; */
  .imgItem {
    padding: 8px;
    img {
      border: 4px solid #fff;
    }
  }
  .title {
    text-align: center;
    margin-top: 40px;
    padding: 10px 14px;
    background: rgba(2, 2, 2, 0.6);
  }
`;
export default function Huoguos() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  };
  return (
    <StyledWrapper
      id="huoguos"
      className="step"
      data-x="850"
      data-y="3000"
      data-rotate="90"
      data-scale="5"
      data-autoplay="15"
    >
      <Slider {...settings}>
        <div className="imgItem">
          <img src={Img2} alt="第二次吃火锅" />
        </div>
        <div className="imgItem">
          <img src={Img3} alt="第三次吃火锅" />
        </div>
        <div className="imgItem">
          <img src={Img4} alt="第四次吃火锅" />
        </div>
        <div className="imgItem">
          <img src={Img5} alt="第五次吃火锅" />
        </div>
        <div className="imgItem">
          <img src={Img6} alt="第六次吃火锅" />
        </div>
        <div className="imgItem">
          <img src={Img7} alt="第七次吃火锅" />
        </div>
        <div className="imgItem">
          <img src={Img8} alt="第八次吃火锅" />
        </div>
        <div className="imgItem">
          <img src={Img9} alt="第九次吃火锅" />
        </div>
      </Slider>
      <h2 className="title">那些年，我们一起吃的火锅</h2>
    </StyledWrapper>
  );
}
