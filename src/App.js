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
import PWinter from './components/PWinter';
import Huas from './components/Huas';
import OnTheRoad from './components/OnTheRoad';
import VideoYang from './components/VideoYang';
import VideoTired from './components/VideoTired';
import Thanks1 from './components/Thanks1';
import Thanks2 from './components/Thanks2';
import Thanks3 from './components/Thanks3';
import Thanks4 from './components/Thanks4';
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
  const [start, setStart] = useState(false);
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
        <VideoYang currStep={currStep} />
        <Huas />
        <OnTheRoad />
        <PWinter currStep={currStep} />
        <VideoTired currStep={currStep} />
        <Thanks1 />
        <Thanks2 />
        <Thanks3 />
        <Thanks4 />

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
          未完待续
        </div>
      </StyledBody>
    </>
  );
};
export default App;
