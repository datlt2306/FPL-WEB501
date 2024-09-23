import "./App.css";
import ShowInfo from "./components/ShowInfo";

function App() {
    const student = {
        name: "Le Trong Dat",
    };
    return (
        <>
            <ShowInfo student={student} />
        </>
    );
}

export default App;
