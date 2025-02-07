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
    const [name, setName] = useState("Đạt");
    const [age, setAge] = useState(20);
    const [isMarried, setIsMarried] = useState(false);
    const [person, setPerson] = useState({
        name: "Đạt",
        age: 20,
        isMarried: false,
    });
    return (
        <div>
            {name} - {age} - {isMarried ? "Đã kết hôn" : "Chưa kết hôn"}
            <p>
                {person.name} - {person.age} - {person.isMarried ? "Đã kết hôn" : "Chưa kết hôn"}
            </p>
        </div>
    );
}

export default App;
