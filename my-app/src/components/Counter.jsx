import React, {useState} from 'react';
import "../styles/basketProductStyle.css";

const Counter = function ({ onCountChange}) {
    const [count, setCount] = useState(1);

    function inc() {
        if (count < 10) {
            const newCount = count + 1;
            setCount(newCount);
            onCountChange(newCount);
        }
    }

    function dec() {
        if (count > 1) {
            const newCount = count - 1;
            setCount(newCount);
            onCountChange(newCount);
        }
    }

    return (
        <div className="counter">
            <button onClick={dec}>-</button>
            <p>{count}</p>
            <button onClick={inc}>+</button>
        </div>
    );
}

export default Counter;