import React from "react";

const Button = ({ children, text = "Primary", variant = "primary", size = "medium" }) => {
    return (
        <button className={`btn btn-${variant} btn-${size}`}>{children ? children : text}</button>
    );
};

export default Button;
