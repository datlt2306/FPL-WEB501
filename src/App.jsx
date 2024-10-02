import { useState } from "react";
import "./App.css";

function App() {
    const [product, setProduct] = useState({});
    const [products, setProducts] = useState([
        { id: 1, name: "Iphone 12", price: 1000, status: true }, // item = 0
        { id: 2, name: "Iphone 13", price: 2000, status: true }, // item = 1
        { id: 3, name: "Iphone 14", price: 3000, status: false }, // item  = 2
    ]);
    const removeItem = (id) => {
        const confirm = window.confirm(`Are you sure you want to delete this product?`);
        if (confirm) {
            setProducts(products.filter((item) => item.id !== id));
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!product) return;
        setProducts([...products, { id: products.length + 1, ...product }]);
    };

    const onChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };
    return (
        <>
            {JSON.stringify(products)}
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="">Tên sản phẩm</label>
                    <input type="text" name="name" onChange={onChange} />
                </div>
                <div>
                    <label htmlFor="">Giá sản phẩm</label>
                    <input type="number" name="price" onChange={onChange} />
                </div>
                <div>
                    <input type="radio" name="status" value={true} onChange={onChange} /> Còn hàng
                    <input type="radio" name="status" value={false} onChange={onChange} /> Hết hàng
                </div>

                <button>Thêm</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Giá</th>
                        <th>Tình trạng</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.status ? "Còn hàng" : "Hết hàng"}</td>
                            <td>
                                <button onClick={() => removeItem(item.id)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
export default App;

/**
 * Bước 1: Tạo state là một mảng products
 * Bước 2: Hiển thị danh sách mảng
 * Bước 3: Taọ hàm xóa sản phẩm
 * Bước 4: Click vào button thì lấy id, truyền id vào hàm xóa sản phẩm
 */

/**
 * B1: Tạo form
 * B2: Lấy giá trị từ input
 * B3: Thêm sản phẩm mới vào mảng products
 */

/**
 * B1: Tạo các input control
 * B2: set name cho input control và sự kiện onChange cho từng control
 * B3: Tạo hàm onChange để lấy giá trị từ input control
 * B4: Sử dụng cú pháp computed property name để lấy giá trị từ input control
 * B5: set giá trị cho state product
 * B6: Sử dụng state product để thêm sản phẩm mới vào mảng products
 */
