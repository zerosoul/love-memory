import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Img1 from '../../assets/memo/hua.1.png';
import Img2 from '../../assets/memo/hua.2.png';
import Img3 from '../../assets/memo/hua.3.png';
import Img4 from '../../assets/memo/hua.4.png';
import Img5 from '../../assets/memo/hua.5.png';
import Img6 from '../../assets/memo/hua.6.png';
import Img7 from '../../assets/memo/hua.7.png';
import Img8 from '../../assets/memo/hua.8.png';
const StyledWrapper = styled.div`
  /* display: flex; */
  /* width: 650px !important; */
  .hua {
    padding: 8px;
    img {
      border: 4px solid #fff;
    }
  }
  .title {
    text-align: center;
    margin-top: 30px;
    padding: 10px 14px;
    background: rgba(2, 2, 2, 0.6);
  }
`;
export default function Huas() {
  const settings = {
    className: 'hua',
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    speed: 500
  };
  return (
    <StyledWrapper
      id="huas"
      className="step"
      data-x="7000"
      data-y="4000"
      data-scale="2"
      data-autoplay="15"
    >
      <Slider {...settings}>
        <div>
          <img src={Img1} alt="花一样的你" />
        </div>
        <div>
          <img src={Img2} alt="第二次吃火锅" />
        </div>
        <div>
          <img src={Img3} alt="第三次吃火锅" />
        </div>
        <div>
          <img src={Img4} alt="第四次吃火锅" />
        </div>
        <div>
          <img src={Img5} alt="第五次吃火锅" />
        </div>
        <div>
          <img src={Img6} alt="第六次吃火锅" />
        </div>
        <div>
          <img src={Img7} alt="第七次吃火锅" />
        </div>
        <div>
          <img src={Img8} alt="第八次吃火锅" />
        </div>
      </Slider>
      <h2 className="title">花一样的你，猪一样的我</h2>
    </StyledWrapper>
  );
}
