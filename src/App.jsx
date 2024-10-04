import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/products`)
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <>
            {products.map((item) => (
                <div key={item.id}>{item.name}</div>
            ))}
        </>
    );
}
export default App;
/**
 * Case 1: trường hợp useEffect không có tham số thứ 2 thì useEffect sẽ chạy mỗi khi component render lại (tương tự state thay đổi)
 * Case 2: trường hợp useEffect có tham số thứ 2 là mảng rỗng [] thì useEffect sẽ chạy 1 lần duy nhất sau khi component render lần đầu tiên
 * Case 3: trường hợp useEffect có tham số thứ 2 là 1 mảng chứa các biến thì useEffect sẽ chạy mỗi khi các biến trong mảng thay đổi
 */
