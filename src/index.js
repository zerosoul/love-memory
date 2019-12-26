import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Bgm from './components/Bgm';

import GlobalStyle from './Global.style';

import register from './registerServiceWorker';

ReactDOM.render(
  <>
    <Bgm />
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);

register();
