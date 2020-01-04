import React from 'react';
import Img1 from '../../assets/memo/ontheroad.1.png';
import Img2 from '../../assets/memo/ontheroad.2.png';
// import Img3 from '../../assets/memo/ontheroad.3.png';
import Img4 from '../../assets/memo/ontheroad.4.png';
import Img5 from '../../assets/memo/ontheroad.5.png';
import Img6 from '../../assets/memo/ontheroad.6.png';
import Img7 from '../../assets/memo/ontheroad.7.png';
import Img8 from '../../assets/memo/ontheroad.8.png';
import Img9 from '../../assets/memo/ontheroad.9.png';
import Img10 from '../../assets/memo/ontheroad.10.png';
import Img11 from '../../assets/memo/ontheroad.11.png';
import Img12 from '../../assets/memo/ontheroad.12.png';
import Img13 from '../../assets/memo/ontheroad.13.png';
import Img14 from '../../assets/memo/ontheroad.14.png';
import MemoImage from '../MemoImage';

export default function OnTheRoad({ step }) {
  return (
    <div
      id="ontheroad"
      className="step"
      data-x="7000"
      data-y="5000"
      data-scale="1"
      data-autoplay="70"
    >
      {step == 'ontheroad' && (
        <MemoImage
          title={'我们的在路上...'}
          img={[Img1, Img2, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12, Img13, Img14]}
        />
      )}
    </div>
  );
}
