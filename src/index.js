import React from 'react';
import ReactDOM from 'react-dom/client';
// import State from './components/useState';
// import Effect from './components/useEffect';
import { BrowserRouter } from 'react-router-dom';
// import ShowSlider from './components/showSlider';
// import List from './components/List';
import App from './App';

// Redux
import store from './app/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>

  <BrowserRouter> 

  <Provider store={store}>
    
    <App/>

  </Provider>
    {/* <ShowSlider />
    <State />
    <Effect /> */}
    {/* <List /> */}
  </BrowserRouter> // vue.js <routerview /> 와 같은 기능. 

  
  // </React.StrictMode>
);


// PascalCase 쓰기!!!!!
// index.js : html 템플릿, js 컴포넌트를 조합하여 렌더링하고 실제 표시한다.