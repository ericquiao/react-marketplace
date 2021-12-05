import * as React from 'react';
import * as ReactDOM from 'react-dom';

const today = new Date();
const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const todayLabel = dayLabels[today.getDay()];

export function showWeekDay2(){

    //const dayElement = React.createElement('b',{className:'underLine'},todayLabel);
    
    const dayElement = <b className = "underLine">{todayLabel}</b>;
    
   // const spanElement = React.createElement('span',{className:'text-xs'}, 'Today is ', dayElement);
    
    const spanElement = <span className = "text-xs">Today is {dayElement}</span>;
    
    const target = document.querySelector('#tDay');

    ReactDOM.render(spanElement, target);

};