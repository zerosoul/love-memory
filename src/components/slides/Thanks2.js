import React from 'react';
import Img0 from '../../assets/memo/bf.1.png';
import Img1 from '../../assets/memo/bf.4.jpg';
import Img2 from '../../assets/memo/bf.2.jpg';
import Img3 from '../../assets/memo/bf.3.jpg';
import MemoImage from '../MemoImage';
export default function Thanks2({ step }) {
  return (
    <div
      id="thanks2"
      className="step"
      data-x="10000"
      data-y="8000"
      data-scale="3"
      data-autoplay="20"
    >
      {step == 'thanks2' && (
        <MemoImage
          img={[Img0, Img1, Img2, Img3]}
          title="感谢"
          desc="每一次精心准备的早餐，颜值和你一样高，好吃又有营养。"
        />
      )}
    </div>
  );
}
