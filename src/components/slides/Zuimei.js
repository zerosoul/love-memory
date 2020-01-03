import React from 'react';
import Img from '../../assets/memo/zuimei.png';
import Img1 from '../../assets/memo/zuimei.1.jpeg';
import Img2 from '../../assets/memo/zuimei.2.png';
import Img3 from '../../assets/memo/zuimei.3.png';
import Img4 from '../../assets/memo/zuimei.4.png';
import Img5 from '../../assets/memo/zuimei.5.png';
import Img6 from '../../assets/memo/zuimei.6.png';
import Img7 from '../../assets/memo/zuimei.7.png';
import Img8 from '../../assets/memo/zuimei.8.png';
import Img9 from '../../assets/memo/zuimei.9.png';
import Img10 from '../../assets/memo/zuimei.10.png';
import Img11 from '../../assets/memo/zuimei.11.jpeg';
import Img12 from '../../assets/memo/zuimei.12.png';
import Img13 from '../../assets/memo/zuimei.13.jpeg';
import Img14 from '../../assets/memo/zuimei.14.png';
import Img15 from '../../assets/memo/zuimei.15.jpeg';
import MemoImage from '../MemoImage';
export default function Zuimei({ step }) {
  return (
    <div
      id="zuimei"
      className="step"
      data-x="3000"
      data-y="1500"
      data-z="0"
      data-scale="20"
      data-autoplay="70"
    >
      {step == 'zuimei' && (
        <MemoImage
          img={[
            Img,
            Img1,
            Img2,
            Img3,
            Img14,
            Img15,
            Img4,
            Img5,
            Img6,
            Img7,
            Img8,
            Img9,
            Img10,
            Img11,
            Img12,
            Img13
          ]}
          title="献给最美的你"
          desc="曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。<br/>相遇相伴，相知相爱，感谢陪伴。<br/>愿余生有一个人，继续守护你..."
        />
      )}
    </div>
  );
}
