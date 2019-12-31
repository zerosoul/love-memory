import React from 'react';
import We1 from '../../assets/memo/we.1.png';
import We2 from '../../assets/memo/we.2.png';
import We3 from '../../assets/memo/we.3.png';
import We4 from '../../assets/memo/we.4.png';
import We5 from '../../assets/memo/we.5.png';
import We6 from '../../assets/memo/we.6.png';
import We7 from '../../assets/memo/we.7.png';
import MemoImage from '../MemoImage';

export default function We() {
  return (
    <div id="overview" className="step" data-x="3000" data-y="1500" data-z="0" data-scale="10">
      <MemoImage title={'我们'} img={[We1, We2, We3, We4, We5, We6, We7]} />
    </div>
  );
}
