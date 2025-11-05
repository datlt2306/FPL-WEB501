import React from "react";

const Button = ({ text = "click me!", color = "blue" }) => {
    return (
        <div>
            <button style={{ backgroundColor: color }}>{text}</button>
        </div>
    );
};

export default Button;
