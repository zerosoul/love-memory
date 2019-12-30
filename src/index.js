import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Bgm from './components/Bgm';
import Loading from './components/Loading';

import GlobalStyle from './Global.style';

import register from './registerServiceWorker';
const Coms = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Loading />}
      <Bgm
        loadOver={() => {
          setLoaded(true);
        }}
      />
      <GlobalStyle />
      <App />
    </>
  );
};
ReactDOM.render(<Coms />, document.getElementById('root'));

register();
