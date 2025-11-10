import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            Giá trị là{count}
            <br />
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
};

export default Counter;
