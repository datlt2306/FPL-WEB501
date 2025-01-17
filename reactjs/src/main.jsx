import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

function showName(user) {
    console.log("user in function", user);
    return user.name;
}
function ShowName(props) {
    console.log("user in component", props);
    return props.name;
}

createRoot(document.getElementById("root")).render(
    <div>
        {showName({ name: "Đạt" })}
        {showName({ name: "Kiên" })}
        <hr />
        <ShowName name="Đạt" />
        <ShowName name="Kiên" />
        <ShowName name="Dũng" />
    </div>
);

// Root Component
// Parent Component
// Children Component
