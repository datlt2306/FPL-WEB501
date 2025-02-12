import React, { useEffect, useState } from "react";

const DemoUseEffect = () => {
    const [count, setCount] = useState(0); // 1
    const [status, setStatus] = useState(false);
    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [status]);
    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setStatus(true)}>Change</button>
        </div>
    );
};

export default DemoUseEffect;
