import React from 'react';
import ReactDOM from 'react-dom';
import AppJsx from './components/AppJsx';
import AppComposition from './components/AppComposition';
import { State00, State01, StateXX } from './components/AppState';
import CountDown from './components/AppEvents';
import CondRender from './components/AppCondRender';
import React101 from './components/AppLists';

//Introducing JSX (https://bit.ly/3E2ruxn)
ReactDOM.render(<AppJsx />, document.getElementById('rootJsx'));

let renderCount = 0;

//Rendering Elements (https://bit.ly/3k21dab)
setInterval(() => {
   ReactDOM.render(<AppJsx arrIdx={renderCount++} />, document.getElementById('rootRender'));
}, 2000);

//Composing Components (https://bit.ly/3hwzXim)
ReactDOM.render(<AppComposition starLevel="4" />, document.getElementById('rootComposition'));

//Composing Components (https://bit.ly/3hwzXim)
ReactDOM.render(<AppComposition starLevel="4" />, document.getElementById('rootComposition'));

const startAt = 10;
let extnlCount = startAt;

//State and Lifecycle (https://bit.ly/3EuM3Cx)
let interval = setInterval(() => {
   ReactDOM.render(<State00 startAt={startAt} counter={extnlCount} />, document.getElementById('rootState00'));
   ReactDOM.render(<State01 startAt={startAt} counter={extnlCount--} />, document.getElementById('rootState01'));

   if(extnlCount < 0) {
      clearInterval(interval)
   }
}, 1000);

ReactDOM.render(<StateXX />, document.getElementById('rootStateXX'));

//Handling Events (https://bit.ly/39g7eKt)
ReactDOM.render(<CountDown startAt={10} />, document.getElementById('rootCountDown'));

//Conditional Rendering (https://bit.ly/3nPije2)
ReactDOM.render(<CondRender startAt={10} />, document.getElementById('rootCondRender'));

//Lists and Keys (https://bit.ly/3fIHeZ7)
ReactDOM.render(<React101 />, document.getElementById('rootReact101'));
