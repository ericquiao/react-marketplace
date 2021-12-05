import * as React from 'react';
import * as ReactDOM from 'react-dom';

const target = document.querySelector('#root');

export function showNow(){
    const now = new Date().toLocaleTimeString();
    const timeElement = React.createElement(
        'span',
        {
        className: 'font-bold'
        },
        now
    );
    const siblings = React.createElement('small',{},'Now is ', timeElement);
    ReactDOM.render(siblings,target);
};