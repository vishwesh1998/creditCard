import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import store from './Store'
import {Provider} from 'react-redux'
import reportWebVitals from './reportWebVitals';
// import StudentDashboard from './studentDashboard'
// import UseState from './function_State/useState'
// import UseStateArray from './function_State/useStateArray'
// import UseStateObject  from './function_State/useStateObject';
// import SortCircuitEval from './function_State/sort_circuit_eval'
// import Form from './function_State/form'
// import App from './Dummy_JSON_User_Data/App'
import App1 from '../src/Creditcard_project/App1'
import store from './Creditcard_project/Store'
// import {Provider} from 'react-redux'
// import App1 from './USeEffect/App1'
// import App from './Dummy_JSON_User_Data/App'
// import App1 from './Dream11_project/App1'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
   <App1/>
   </Provider>
  // <App1/>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
