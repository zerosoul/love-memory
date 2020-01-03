import React from 'react';
import Img0 from '../../assets/memo/youlechang.0.png';
import Img1 from '../../assets/memo/youlechang.1.png';
import Img2 from '../../assets/memo/youlechang.2.png';
import Img3 from '../../assets/memo/youlechang.3.png';
import Img4 from '../../assets/memo/youlechang.4.jpeg';
import Img5 from '../../assets/memo/youlechang.5.jpeg';
import Img6 from '../../assets/memo/youlechang.6.jpeg';
import MemoImage from '../MemoImage';

export default function Huanlegu({ step }) {
  return (
    <div
      id="huanlegu"
      className="step"
      data-x="6700"
      data-y="-300"
      data-scale="6"
      data-autoplay="20"
    >
      {step == 'huanlegu' && (
        <MemoImage
          img={[Img6, Img0, Img1, Img2, Img3, Img4, Img5]}
          title="欢乐谷"
          date="2016.10.21"
          desc="在你的威逼利诱下，恐高的我成功挑战了跳楼机~~~"
        />
      )}
    </div>
  );
}
