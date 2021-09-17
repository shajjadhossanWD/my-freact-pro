import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const myFname = "Shajjad";
const myLname = "Hossan"
const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();
const image1 = "https://picsum.photos/200/300";
const image2 = "https://picsum.photos/250/300";
const image3 = "https://picsum.photos/300/300";
const location = "https://picsum.photos/";



let curDate = new Date();
curDate = curDate.getHours();
let updateData = '';
let cssStyle = {};
if(curDate >=5 && curDate <= 12 ){
  updateData = "good morning";
  cssStyle.color = "aqua";
}else if(curDate > 12 && curDate <= 16) {
  updateData = "good afternoon";
  cssStyle.color = " yellow";
}else if(curDate > 16 && curDate <= 18){
  updateData = " good evening";
  cssStyle.color = "blue";
}else{
  updateData = "good Night";
  cssStyle.color = "black";
}

const paragraph = {
  color: 'red',
  textTransform: 'uppercase',
  textAlign: 'center'
}



ReactDOM.render(
  <>
  <h1 className = "heading">{`${myFname} ${myLname}`} the front End Web Developer:)</h1>
  <p style = {paragraph}>current Date is = {currentDate} </p>
  <p style = {paragraph}>current time is = {currentTime}</p>
  <div>
  <h2> Hello Sir,<span style={cssStyle}> {updateData}</span> </h2>
  </div>
  </>,
  // we can use <></>,[], or any colosing element such as <div></div>
  document.getElementById('root')
  );
