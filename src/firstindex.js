import {showNow2} from "./show-now-2-jsx";
import {showWeekDay2} from "./show-weekday-2";
import {showDadJoke} from "./dad-joke";
import {showJoke} from "./dad-joke";

showWeekDay2();

setInterval(() => {showNow2()},1000);

showJoke();