import React, { useState } from "react";

const Counter = () => {
    const [friends, setFriends] = useState([
        { id: 1, name: "Đạt" }, // "bạn" + friend.name
        { id: 2, name: "Kiên" }, // "bạn" +friend.name
        { id: 3, name: "Nhung" }, // "bạn" + friend.name]);
    ]);

    const removeFriend = (id) => {
        const confirm = window.confirm(`Are you sure????`);
        if (confirm) {
            setFriends(friends.filter((friend) => friend.id !== id));
        }
    };
    return (
        <div>
            {friends.map((friend) => (
                <li key={friend.id}>
                    Bạn {friend.name} <button onClick={() => removeFriend(friend.id)}>Xóa</button>
                </li>
            ))}
        </div>
    );
};

export default Counter;

// myNumbers = [{id: 1},{ id: 2},{id: 3},{ id: 4}]
// myNumber.filter((number) => number.id !== 3)
// newNumbers = [1,2,4]
