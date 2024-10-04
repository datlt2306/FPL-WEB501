import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                // setProducts(await (await axios.get(`http://localhost:3000/products`)).data);
                const response = await axios.get(`http://localhost:3000/products`);
                setProducts(response.data);
            } catch (error) {
                console.log(error.message);
            }
        })();
    }, []);

    const removeItem = async (id) => {
        const confirm = window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?");
        if (confirm) {
            try {
                await axios.delete(`http://localhost:3000/products/${id}`);
                setProducts(products.filter((item) => item.id !== id));
            } catch (error) {
                console.log(error.message);
            }
        }
    };
    return (
        <>
            {products.map((item) => (
                <div key={item.id}>
                    {item.name} <button onClick={() => removeItem(item.id)}>Xóa</button>
                </div>
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
