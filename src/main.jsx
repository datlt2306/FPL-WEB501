import ReactDOM from "react-dom/client";
const user = {
    first: "John",
    last: "Doe",
};
function displayUser(user) {
    console.log(user);
    return user.first + "" + user.last;
}

const element = <h1>{displayUser(user)}</h1>;

ReactDOM.createRoot(document.querySelector("#root")).render(element);
