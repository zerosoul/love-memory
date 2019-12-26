import React, { useEffect } from 'react';
import 'impress.js';
import styled from 'styled-components';
import LoveDuration from './components/LoveDuration';
import FirstMet from './components/FirstMet';
import Work from './components/Work';
const StyledBody = styled.section`
  min-height: 740px;

  .step {
    position: relative;
    width: 900px;
    padding: 40px;
    margin: 20px auto;
    box-sizing: border-box;
    font-size: 48px;
    line-height: 1.5;
  }
`;
const App = () => {
  useEffect(() => {
    const rootElement = document.getElementById('impress');
    rootElement.addEventListener('impress:init', function() {
      console.log('Impress init');
    });
    window.impress().init();
  }, []);
  return (
    <StyledBody id="impress">
      <LoveDuration />
      <FirstMet />
      <Work />

      <div id="title" className="step" data-x="0" data-y="0" data-scale="4">
        <span className="try">then you should try</span>
        <h1>
          impress.js<sup>*</sup>
        </h1>
        <span className="footnote">
          <sup>*</sup> no rhyme intended
        </span>
      </div>
      <div id="its" className="step" data-x="850" data-y="3000" data-rotate="90" data-scale="5">
        <p>
          It’s a <strong>presentation tool</strong> <br />
          inspired by the idea behind <a href="http://prezi.com">prezi.com</a> <br />
          and based on the <strong>power of CSS3 transforms and transitions</strong> in modern
          browsers.
        </p>
      </div>

      <div id="big" className="step" data-x="3500" data-y="2100" data-rotate="180" data-scale="6">
        <p>
          visualize your <b>big</b> <span className="thoughts">thoughts</span>
        </p>
      </div>
      <div
        id="tiny"
        className="step"
        data-x="2825"
        data-y="2325"
        data-z="-3000"
        data-rotate="300"
        data-scale="1"
      >
        <p>
          and <b>tiny</b> ideas
        </p>
      </div>
      <div
        id="ing"
        className="step"
        data-x="3500"
        data-y="-850"
        data-z="0"
        data-rotate="270"
        data-scale="6"
      >
        <p>
          by <b className="positioning">positioning</b>, <b className="rotating">rotating</b> and{' '}
          <b className="scaling">scaling</b> them on an infinite canvas
        </p>
      </div>

      <div id="imagination" className="step" data-x="6700" data-y="-300" data-scale="6">
        <p>
          the only <b>limit</b> is your <b className="imagination">imagination</b>
        </p>
      </div>

      <div id="source" className="step" data-x="6300" data-y="2000" data-rotate="20" data-scale="4">
        <p>want to know more?</p>
        <q>
          <a href="http://github.com/impress/impress.js">use the source</a>, Luke!
        </q>
      </div>

      <div id="one-more-thing" className="step" data-x="6000" data-y="4000" data-scale="2">
        <p>one more thing...</p>
      </div>

      <div
        id="its-in-3d"
        className="step"
        data-x="6200"
        data-y="4300"
        data-z="-100"
        data-rotate-x="-40"
        data-rotate-y="10"
        data-scale="2"
      >
        <p>
          <span className="have">have</span> <span className="you">you</span>{' '}
          <span className="noticed">noticed</span> <span className="its">it’s</span>{' '}
          <span className="in">in</span>{' '}
          <b>
            3D<sup>*</sup>
          </b>
          ?
        </p>
        <span className="footnote">* beat that, prezi ;)</span>
      </div>
    </StyledBody>
  );
};
export default App;
