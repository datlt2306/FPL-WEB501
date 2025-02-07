// import "./App.css";
// import Header from "./components/Header";
// import Banner from "./components/Banner";
// import LatestNews from "./components/LatestNews";
// import Footer from "./components/Footer";

// function App() {
//     const logoUrl = "./logo.svg";
//     return (
//         <>
//             <Header logo={logoUrl} />
//             <Banner />
//             <LatestNews />
//             <Footer />
//         </>
//     );
// }

// export default App;

import { useState } from "react";

function App() {
    const [todos, setTodos] = useState([
        { title: "Chơi liên quân", completed: true }, // todo
        { title: "Học Reactjs", completed: false }, // todo
        { title: "Đi chơi với bạn gái", completed: false }, // todo
    ]);
    return (
        <div className="container">
            <div className="row">
                {todos.map((todo) => (
                    <div className="col" key={todo.title}>
                        <h2>{todo.title}</h2>
                        <p>{todo.completed ? "Hoàn thành" : "Chưa hoàn thành"}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
