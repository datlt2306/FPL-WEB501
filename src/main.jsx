import { createRoot } from "react-dom/client";
function formatName(user) {
    return `${user.firstName} ${user.lastName}`;
}
const user = {
    firstName: "John",
    lastName: "Doe",
};
const element = <h1>Hello, {formatName(user)}!</h1>;
createRoot(document.getElementById("root")).render(element);
