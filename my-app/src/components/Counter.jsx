import React, {useState} from 'react';
import "../styles/basketProductStyle.css";

const Counter = function (){
    const[count, setCount] = useState(1)

    function inc(){
        if  (count < 10) {
            setCount(count + 1)
        }
    }

    function dec(){
        if  (count > 1) {
            setCount(count - 1)
        }
    }

    return(
        <div className="counter">
            <button onClick={dec}>-</button>
            <p>{count}</p>
            <button onClick={inc}>+</button>
        </div>
    )
}

export default Counter;