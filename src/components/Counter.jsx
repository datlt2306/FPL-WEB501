import React, { useState } from "react";

const Counter = () => {
    const [friends] = useState([
        { id: 1, name: "Đạt" }, // "bạn" + friend.name
        { id: 2, name: "Kiên" }, // "bạn" +friend.name
        { id: 3, name: "Nhung" }, // "bạn" + friend.name]);
    ]);
    return (
        <div>
            {friends.map((friend) => (
                <li key={friend.id}>Bạn {friend.name}</li>
            ))}
        </div>
    );
};

export default Counter;
