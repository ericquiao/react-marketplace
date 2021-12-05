import * as React from 'react';
import * as ReactDOM from 'react-dom';

const today = new Date();
const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const todayLabel = dayLabels[today.getDay()];


export function showWeekDay(){

    const dayElement = React.createElement('b',{className:'underLine'},todayLabel);
    const spanElement = React.createElement('span',{className:'text-xs'}, 'Today is ', dayElement);
    const target = document.querySelector('#tDay');
    ReactDOM.render(spanElement, target);

};