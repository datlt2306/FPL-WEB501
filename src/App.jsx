import Button from "./components/Button";
import LessonCard from "./components/LessonCard";
import UserCard from "./components/UserCard";
import "./App.css";
function App() {
    const users = [
        { name: "Nguyễn Văn A", role: "Sinh viên", email: "a@example.com" },
        { name: "Trần Thị B", role: "Giảng viên", email: "b@example.com" },
        { name: "Lê Văn C", role: "Admin", email: "c@example.com" },
    ];
    const lessons = [
        {
            title: "React là gì?",
            duration: "30 phút",
            difficulty: "Dễ",
            content: "Giới thiệu về React và cách hoạt động",
        },
        {
            title: "Hooks trong React",
            duration: "60 phút",
            difficulty: "Khó",
            content: "Tìm hiểu useState, useEffect và custom hooks",
        },
    ];
    return (
        <div>
            <h2>User Card</h2>
            <UserCard user={users[0]} />
            <UserCard user={users[1]} />
            <UserCard user={users[2]} />

            <h2>Lesson Card</h2>
            <LessonCard {...lessons[0]} />
            <LessonCard {...lessons[1]} />

            <h2>Button</h2>
            <Button text="Primary" variant="primary" />
            <Button variant="primary">Primary</Button>
            <Button variant="danger" size="large">
                Xóa
            </Button>
            <Button variant="success" size="small">
                Lưu
            </Button>
        </div>
    );
}

export default App;
