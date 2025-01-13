import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
const a = 10;
const b = 20;
const myInfo = {
    name: "Đạt",
    age: 30,
    isMarried: true,
};

function sum(a, b) {
    return a + b;
}
function showInfo(user) {
    return (
        <div>
            <h2>Họ và tên: {user.name}</h2>
            <p>Tuổi: {user.age}</p>
            <p>Tình trạng: {user.isMarried ? "Đã có gia đình" : "Chưa có"}</p>
            <p>{sum(a, b)}</p>
        </div>
    );
}
// jsx => javascript xml
// document.querySelector('#root').innerHTML = a + b;
createRoot(document.getElementById("root")).render(
    <div>
        <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{myInfo.name}</h5>
                <p className="card-text">{myInfo.age}</p>
                <a href="#" className="btn btn-primary">
                    Go somewhere
                </a>
            </div>
        </div>
    </div>
);
// <div>ul + h1</div>
