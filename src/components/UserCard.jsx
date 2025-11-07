import React from "react";

const UserCard = ({ user }) => {
    console.log(user); // <<<
    return (
        <div className="user-card">
            <h2>{user.name}</h2>
            <p>{user.role}</p>
            <p>{user.email}</p>
            <hr />
        </div>
    );
};

export default UserCard;
