import React, { useEffect, useState } from 'react';
import 'impress.js';
import styled from 'styled-components';
import Navs from './components/Navs';
import StartMask from './components/StartMask';
import LoveDuration from './components/slides/LoveDuration';
import PSpring from './components/slides/PSpring';
import FirstMet from './components/slides/FirstMet';
import Work from './components/slides/Work';
import PairPhoto from './components/slides/PairPhoto';
import Huoguos from './components/slides/Huoguos';
import PSummer from './components/slides/PSummer';
import Xiufa from './components/slides/Xiufa';
import Behind from './components/slides/Behind';
import Huanlegu from './components/slides/Huanlegu';
import PAutumn from './components/slides/PAutumn';
import PWinter from './components/slides/PWinter';
import Huas from './components/slides/Huas';
import OnTheRoad from './components/slides/OnTheRoad';
import VideoYang from './components/slides/VideoYang';
import VideoTired from './components/slides/VideoTired';
import Thanks1 from './components/slides/Thanks1';
import Thanks2 from './components/slides/Thanks2';
import Thanks3 from './components/slides/Thanks3';
import Thanks4 from './components/slides/Thanks4';
import We from './components/slides/We';
import Zuimei from './components/slides/Zuimei';
import Letter from './components/slides/Letter';
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
    margin: 0 auto;
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
    if (start) {
      window.impress().init();
    }
  }, [start]);
  const handleStart = () => {
    setStart(true);
  };
  return (
    <>
      {!start && <StartMask startPlay={handleStart} />}
      {start && (
        <Navs
          goNext={() => {
            window.impress().next();
          }}
          goPrev={
            currStep == 'love-dur'
              ? null
              : () => {
                  window.impress().prev();
                }
          }
        />
      )}
      <StyledBody className={start ? 'start' : ''} id="impress">
        <LoveDuration />
        <PSpring currStep={currStep} />
        <FirstMet step={currStep} />
        <Work step={currStep} />
        <PairPhoto step={currStep} />
        <Huoguos step={currStep} />

        <PSummer currStep={currStep} />
        <Xiufa step={currStep} />
        <Behind step={currStep} />

        <Huanlegu step={currStep} />
        <PAutumn currStep={currStep} />
        <VideoYang currStep={currStep} />
        <Huas step={currStep} />
        <OnTheRoad step={currStep} />
        <PWinter currStep={currStep} />
        <VideoTired currStep={currStep} />
        <Thanks1 step={currStep} />
        <Thanks2 step={currStep} />
        <Thanks3 step={currStep} />
        <Thanks4 step={currStep} />
        <We step={currStep} />
        <Zuimei step={currStep} />
        <Letter />
      </StyledBody>
    </>
  );
};
export default App;
