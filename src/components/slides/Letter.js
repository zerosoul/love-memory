import React from 'react';
import NotePaper from '../Notepaper';
import WeImage from '../../assets/memo/letter.jpg';
import We2Image from '../../assets/memo/we.letter.png';
import Heart from '../Heart';

export default function Letter() {
  return (
    <div
      id="letter"
      className="step"
      data-x="6200"
      data-y="4300"
      data-z="-100"
      data-rotate-x="-40"
      data-rotate-y="10"
      data-scale="2"
      style={{ position: 'relative' }}
    >
      <NotePaper
        style={{ width: '520px', margintLeft: '40px' }}
        content="你总埋怨我陪你时间太少，不像以前对你好了，缺少浪漫和仪式感。<br/>的确，爱情这个东西，它的亲密关系、它的新鲜感，是需要做出一些努力来保持的。人难免被生活改变，可惜我懂的这个道理太晚了，付出了沉痛的代价。<br/><br/>2019即将过去，原本我们计划的是2020结婚，结果由于我一时愚蠢犯错，长时间冷战，导致关系破裂。<br/><br/>对不起，我缺席了那些你需要我的陪伴时刻。<br/>对不起，我忽视了的你每一次的感受。<br/>对不起，我没能遵守曾经的承诺：不再让你受委屈。<br/><br/>破镜难圆，只愿以后的日子里，你能过得更加幸福。<br/><br/>新年快乐。"
        date="依然爱你的杨国春"
      />
      <Heart
        style={{
          position: 'absolute',
          opacity: '.4',
          top: '88%',
          left: '0',
          transform: 'rotate(-100deg)',
          right: 'auto'
        }}
        size="30px"
      />
      <Heart
        style={{
          position: 'absolute',
          opacity: '.6',
          top: '10%',
          right: '-10px',
          transform: 'rotate(-10deg)',
          left: 'auto'
        }}
        size="40px"
      />
      <img
        style={{
          position: 'absolute',
          top: '20px',
          left: 0,
          width: '220px',
          border: '2px solid #fff',
          transform: 'rotate(10deg)'
        }}
        src={We2Image}
        alt="生日合影"
      />
      <img
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '-50px',
          width: '270px',
          border: '2px solid #fff',
          transform: 'rotate(-10deg)'
        }}
        src={WeImage}
        alt="最后的合影"
      />
    </div>
  );
}
