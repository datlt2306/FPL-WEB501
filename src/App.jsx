import Button from "./components/Button";
import StudentCard from "./components/StudentCard";

function App() {
    const user = {
        name: "Nhập tên của bạn",
        dob: "dd/mm/yyyy",
        hometown: "Nhập quê quán",
        hobby: "Nhập sở thích",
    };
    return (
        <div>
            <StudentCard {...user}>
                <div>ahihi</div>
            </StudentCard>
            <Button text="Click" color="red" />
            <Button text="Change me!" color="yellow" />
        </div>
    );
}

export default App;
