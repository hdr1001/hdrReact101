import React from 'react';
import ReactDOM from 'react-dom';
import AppJsx from './components/AppJsx';
import AppComposition from './components/AppComposition'

//Introducing JSX (https://bit.ly/3E2ruxn)
ReactDOM.render(<AppJsx />, document.getElementById('rootJsx'));

let renderCount = 0;

//Rendering Elements (https://bit.ly/3k21dab)
setInterval(() => {
   ReactDOM.render(<AppJsx arrIdx={renderCount++} />, document.getElementById('rootRender'));
}, 2000);

//Composing Components (https://bit.ly/3hwzXim)
ReactDOM.render(<AppComposition starLevel="4" />, document.getElementById('rootComposition'));
