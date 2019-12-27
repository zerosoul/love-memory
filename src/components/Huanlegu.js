import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Img0 from '../assets/memo/youlechang.0.png';
import Img1 from '../assets/memo/youlechang.1.png';
import Img2 from '../assets/memo/youlechang.2.png';
import Img3 from '../assets/memo/youlechang.3.png';
const StyledWrapper = styled.div`
  /* display: flex; */
  /* width: 600px !important; */
  .imgItem {
    padding: 8px;
    vertical-align: middle;
    img {
      width: 80%;
      border: 4px solid #fff;
      margin: 0 auto;
    }
  }
  .title {
    text-align: center;
    margin-top: 40px;
    padding: 10px 14px;
    background: rgba(2, 2, 2, 0.6);
  }
`;
export default function Huanlegu() {
  const settings = {
    dots: true,
    autoplay: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <StyledWrapper id="huanlegu" className="step" data-x="6700" data-y="-300" data-scale="6">
      <Slider {...settings}>
        <div className="imgItem">
          <img src={Img0} alt="图一" />
        </div>
        <div className="imgItem">
          <img src={Img1} alt="图一" />
        </div>
        <div className="imgItem">
          <img src={Img2} alt="第二次吃火锅" />
        </div>
        <div className="imgItem">
          <img src={Img3} alt="第三次吃火锅" />
        </div>
      </Slider>
      <h2 className="title">一起去欢乐谷，在你的威逼利诱下，我成功挑战了跳楼机</h2>
    </StyledWrapper>
  );
}
