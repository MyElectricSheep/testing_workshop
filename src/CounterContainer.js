import React, { useState } from 'react';
import Counter from "./Counter"

const CounterContainer = () => {
    const [counter, setCounter] = useState(0)
    return ( 
        <div id="counter">
            <button id="increment" onClick={() => setCounter(c => c + 1)}>+1</button>
            <Counter counter={counter} />
            <button id="decrement" onClick={() => setCounter(c => c - 1)}>-1</button>
        </div>
     );
}
 
export default CounterContainer;