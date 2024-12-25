import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.css';
import GreetingElement from './myGrettingApp'; 
import reportWebVitals from './reportWebVitals';
import GreetingElementwithProp from './myGreetingProp'; 
import AppColor from './AppBackroundColour';

ReactDOM.render(
  <React.StrictMode> 
    <GreetingElementwithProp msg="Hi, it's Monday" /> 
    <GreetingElementwithProp msg="Hi, it's Tuesday!" />
    <GreetingElementwithProp msg="Hi, it's Wednesday!" />
    <GreetingElementwithProp msg="Hi, it's Thursday!" />
    <GreetingElementwithProp msg="Hi, it's Friday!" />
    <GreetingElementwithProp msg="Hi, it's Saturday!" />
    <GreetingElementwithProp msg="Hi, it's Sunday!" />
    <AppColor heading="This is first element" lbl="Name :"color="green"/>
    <AppColor heading="This is second element" lbl="Name :"color="blue"/>
    <AppColor heading="This is third third element" lbl="Name :"color="Yellow"/> 
  </React.StrictMode>,
  document.getElementById('root') 
);
