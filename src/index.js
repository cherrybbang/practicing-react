import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import ImgSlider from './components/imgSlider';
// import State from './components/useState';
import State from './components/useState';
import Effect from './components/useEffect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <State />
    <Effect />
  </React.StrictMode>
);

