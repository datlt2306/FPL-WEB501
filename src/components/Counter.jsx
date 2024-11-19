import React, { useState } from "react";

const Counter = () => {
    return (
        <div>
            Counter : {count}
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default Counter;
