import React  from 'react';
import useNewTimer from "../hooks/useTimer"
function UseTimerDemo(props) {
    //Here we reference our custom hook
    const timer = useNewTimer(new Date());

    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {timer.toLocaleTimeString()}.</h2>
        </div>
    );
}

export default UseTimerDemo