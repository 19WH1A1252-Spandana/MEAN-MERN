import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './reducer';
import{ Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';

const captureActions= (store) =>
{
  return(next) =>
  {
    return(action) =>
    {
      const result = next(action);
      console.log('Action captured is"',result);
    }
  }
}
const store = createStore(reducer,applyMiddleware(captureActions));
ReactDOM.render(
 <Provider store = {store}>
 <App />
 </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

