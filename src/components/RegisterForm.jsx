import React, { useState } from "react";

const RegisterForm = () => {
    const [name, setName] = useState("");
    const [isOn, setIsOn] = useState(false);
    return (
        <div>
            <button onClick={() => setIsOn(!isOn)}>Change</button>
            {isOn ? "Bật" : "Tắt"}
            {isOn ? (
                <form>
                    <input
                        type="text"
                        defaultValue={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <p>Bạn đã nhập: {name}</p>
                </form>
            ) : (
                ""
            )}
        </div>
    );
};

export default RegisterForm;
