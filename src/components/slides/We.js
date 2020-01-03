import React from 'react';
import We0 from '../../assets/memo/we.0.png';
import We1 from '../../assets/memo/we.1.png';
import We2 from '../../assets/memo/we.2.png';
import We3 from '../../assets/memo/we.3.png';
import We4 from '../../assets/memo/we.4.png';
import We5 from '../../assets/memo/we.5.png';
import We6 from '../../assets/memo/we.6.png';
import We7 from '../../assets/memo/we.7.png';
import We8 from '../../assets/memo/we.8.png';
import We9 from '../../assets/memo/we.9.png';
import We10 from '../../assets/memo/we.10.png';
import We11 from '../../assets/memo/we.11.png';
import We12 from '../../assets/memo/we.12.png';
import We13 from '../../assets/memo/we.13.png';
import We14 from '../../assets/memo/we.14.png';
import We15 from '../../assets/memo/we.15.png';
import We16 from '../../assets/memo/we.16.png';
import We17 from '../../assets/memo/we.17.png';
import We18 from '../../assets/memo/we.18.png';
import We19 from '../../assets/memo/we.19.png';
import We20 from '../../assets/memo/we.20.jpeg';
import We21 from '../../assets/memo/we.21.jpeg';
import MemoImage from '../MemoImage';

export default function We({ step }) {
  return (
    <div
      id="we"
      className="step"
      data-x="3000"
      data-y="1500"
      data-z="0"
      data-scale="10"
      data-autoplay="98"
    >
      {step == 'we' && (
        <MemoImage
          title={'我们'}
          img={[
            We0,
            We20,
            We19,
            We1,
            We2,
            We21,
            We3,
            We4,
            We5,
            We6,
            We7,
            We8,
            We9,
            We10,
            We11,
            We12,
            We13,
            We14,
            We15,
            We16,
            We17,
            We18
          ]}
        />
      )}
    </div>
  );
}
