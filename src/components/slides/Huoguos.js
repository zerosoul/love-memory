import React from 'react';
import Img1 from '../../assets/memo/huoguo.1.png';
import Img2 from '../../assets/memo/huoguo.2.png';
import Img3 from '../../assets/memo/huoguo.3.png';
import Img4 from '../../assets/memo/huoguo.4.png';
import Img41 from '../../assets/memo/huoguo.4.1.png';
import Img5 from '../../assets/memo/huoguo.5.png';
import Img6 from '../../assets/memo/huoguo.6.png';
import Img7 from '../../assets/memo/huoguo.7.png';
import Img8 from '../../assets/memo/huoguo.8.png';
import Img9 from '../../assets/memo/huoguo.9.png';
import Img10 from '../../assets/memo/huoguo.10.jpeg';
import Img11 from '../../assets/memo/huoguo.11.jpeg';
import Img12 from '../../assets/memo/huoguo.12.jpeg';
import Img13 from '../../assets/memo/huoguo.13.jpeg';
import Img14 from '../../assets/memo/huoguo.14.jpeg';
import Img15 from '../../assets/memo/huoguo.15.jpeg';
import MemoImage from '../MemoImage';

export default function Huoguos({ step }) {
  return (
    <div
      id="huoguos"
      className="step"
      data-x="850"
      data-y="3000"
      data-rotate="90"
      data-scale="5"
      data-autoplay="80"
    >
      {step == 'huoguos' && (
        <MemoImage
          desc="第一次，第二次，第三次...第N次"
          title={'那些年，一起吃的火锅🍲'}
          img={[
            Img9,
            Img2,
            Img3,
            Img4,
            Img41,
            Img5,
            Img6,
            Img7,
            Img8,
            Img1,
            Img10,
            Img11,
            Img12,
            Img13,
            Img14,
            Img15
          ]}
        />
      )}
    </div>
  );
}
