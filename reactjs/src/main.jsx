/* eslint-disable react/prop-types */
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

const profile = {
    name: "Đạt",
    age: 30,
    address: "Hà Nội",
    isMarried: true,
};
function ShowName(props) {
    return (
        <>
            <h2>{props.profile.name}</h2>
            <p>{props.profile.age}</p>
            <p>{props.profile.address}</p>
            <p>{props.profile.isMarried ? "Lấy vợ rồi" : "Ế"}</p>
        </>
    );
}

createRoot(document.getElementById("root")).render(
    <div>
        <ShowName profile={profile} />
    </div>
);

// Root Component
// Parent Component
// Children Component
