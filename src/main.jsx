import { createRoot } from "react-dom/client";

function User() {
    return (
        <div>
            <h2>User Component</h2>
        </div>
    );
}
function Profile() {
    const user = {
        name: "Dat",
        age: 20,
        status: true,
    };
    const fullName = "Lê Trọng Đat";
    return (
        <div>
            <h1>Hello {fullName}</h1>
            <p>Tuổi {user.age + 10}</p>
            <p>Tình trạng: {user.status ? "Đã kết hôn" : "Ế"}</p>
        </div>
    );
}

createRoot(document.getElementById("root")).render(
    <div>
        <Profile />
        <User />
    </div>
);
