import React from 'react';
import Img from '../../assets/memo/xiufa.1.png';
import MemoImage from '../MemoImage';
export default function Xiufa({ step }) {
  return (
    <div
      id="xiufa"
      className="step"
      data-x="2825"
      data-y="2325"
      data-z="-3000"
      data-rotate="300"
      data-scale="1"
      data-autoplay="10"
    >
      {step == 'xiufa' && (
        <MemoImage
          img={Img}
          date="2018.02.27"
          title="染发啦"
          desc="第一次陪你去染发，兴奋得像个孩子，一说要拍照，又安静得像个淑女~"
        />
      )}
    </div>
  );
}
