import React, { useEffect, useState } from 'react';
import 'impress.js';
import styled from 'styled-components';
import StartMask from './components/StartMask';
import LoveDuration from './components/LoveDuration';
import PSpring from './components/PSpring';
import FirstMet from './components/FirstMet';
import Work from './components/Work';
import PairPhoto from './components/PairPhoto';
import Huoguos from './components/Huoguos';
import PSummer from './components/PSummer';
import Xiufa from './components/Xiufa';
import Behind from './components/Behind';
import Huanlegu from './components/Huanlegu';
import PAutumn from './components/PAutumn';
import Huas from './components/Huas';
import VideoYang from './components/VideoYang';
const StyledBody = styled.section`
  min-height: 740px;
  opacity: 0;
  transition: opacity 1s;
  &.start {
    opacity: 1;
  }
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
  const [start, setStart] = useState(true);
  const [currStep, setCurrStep] = useState('');
  useEffect(() => {
    const rootElement = document.getElementById('impress');
    rootElement.addEventListener('impress:init', function() {
      console.log('Impress init');
    });
    rootElement.addEventListener('impress:stepenter', function(event) {
      var currentStep = event.target;
      console.log("Entered the Step Element '" + currentStep.id + "'");
      setCurrStep(currentStep.id);
    });
    window.impress().init();
  }, []);
  const handleStart = () => {
    setStart(true);
  };
  return (
    <>
      {!start && <StartMask startPlay={handleStart} />}
      <StyledBody className={start ? 'start' : ''} id="impress">
        <LoveDuration />
        <PSpring currStep={currStep} />
        <FirstMet />
        <Work />
        <PairPhoto />
        <Huoguos />

        <PSummer currStep={currStep} />
        <Xiufa />
        <Behind />

        <Huanlegu />
        <PAutumn currStep={currStep} />
        <VideoYang />
        <Huas />
        <div id="one-more-thing2" className="step" data-x="7000" data-y="4000" data-scale="2">
          <p>one more thing...</p>
          <p>one more thing...</p>
          <p>one more thing...</p>
          <p>one more thing...</p>
        </div>
        <div id="one-more-thing3" className="step" data-x="8000" data-y="4000" data-scale="2">
          <p>one more thing...</p>
          <p>one more thing...</p>
          <p>one more thing...</p>
          <p>one more thing...</p>
        </div>
        <div id="one-more-" className="step" data-x="9000" data-y="5000" data-scale="3">
          <p>one more thing...</p>
          <p>one more thing...</p>
          <p>one more thing...</p>
          <p>one more thing...</p>
        </div>
        <div id="one-mor" className="step" data-x="10000" data-y="6000" data-scale="4">
          <p>one more thing...</p>
          <p>one more thing...</p>
          <p>one more thing...</p>
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
    </>
  );
};
export default App;
