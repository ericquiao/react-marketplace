import * as React from 'react';
import * as ReactDOM from 'react-dom';

const target  = document.querySelector('#root')


export function showNow2(){

    const now = new Date().toLocaleTimeString();
    const timeElement = <span className = "font-bold">{now}</span>;

    const elements = <div>Now is {timeElement}</div>;

    ReactDOM.render(elements, target);

}








    










