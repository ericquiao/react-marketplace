import React from 'react';
import ReactDOM from 'react-dom';
import {CareerItem} from "./career-item"

ReactDOM.render(
<div className = "flex flex-col gap-3 p-3">
<CareerItem title="Memer" department = "UI/UX Design"  level="Experienced"/> 
<CareerItem title="Slack Chatter" department="Slack Chatter" level="Entry"/> 
<CareerItem title="Janitor" department="Health/Welfare" level="Experienced"/> 
<CareerItem title="Github Issue Commentor" department="Engineering" level="Internship"/> 


</div>,
document.querySelector("#root"));