import React, { useState } from "react";

function Counter() {
    // let count = 0;

    // const handleClick = () => {
    //     count += 1;
    //     console.log(count); // Giá trị count thay đổi nhưng React không biết, không render lại UI
    // };

    // destructoring
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}

export default Counter;
