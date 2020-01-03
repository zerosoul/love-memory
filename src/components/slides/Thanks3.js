import React from 'react';
import Img from '../../assets/memo/thanks.cc.png';
import Img2 from '../../assets/memo/thanks.cc.2.png';
import CcImage1 from '../../assets/memo/cc.1.png';
import CcImage2 from '../../assets/memo/cc.2.png';
import MemoImage from '../MemoImage';
export default function Thanks3({ step }) {
  return (
    <div
      id="thanks3"
      className="step"
      data-x="10000"
      data-y="9000"
      data-scale="3"
      data-autoplay="10"
    >
      {step == 'thanks3' && (
        <MemoImage
          date="2018.10.03"
          img={[Img, Img2, CcImage1, CcImage2]}
          title="感谢"
          desc="给晨晨梳的漂亮小辫，一起拍好玩的美颜照，带给了晨晨很多快乐"
        />
      )}
    </div>
  );
}
