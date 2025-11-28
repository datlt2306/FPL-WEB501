import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
    // set state products
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetchProducts();
    }, []);
    // khai báo hàm gọi danh sách sản phẩm
    const fetchProducts = async () => {
        // gọi api danh sách sản phẩm
        const response = await fetch(`http://localhost:3000/products`);
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        // lấy dữ liệu từ api chuyển sang JSON
        const data = await response.json();
        // set state products
        setProducts(data);
    };
    // khai báo hàm xóa sản phẩm
    const handleDelete = async (id) => {
        // gọi api xóa sản phẩm
        const response = await fetch(`http://localhost:3000/products/${id}`, { method: "DELETE" });
        // kiểm tra response
        if (response.ok) {
            // hiển thị thông báo xóa thành công
            alert("Xóa Thành công");
            // gọi hàm gọi danh sách sau khi xóa sản phẩm => rerender
            fetchProducts();
        }
    };
    return (
        <div>
            <h1>Quản lý sản phẩm</h1>
            <div className="container mx-auto relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
                <table className="w-full text-sm text-left rtl:text-right text-body">
                    <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                        <tr>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Ảnh
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Tên sản phẩm
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Giá sản phẩm
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Hành động
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length > 0 ? (
                            products.map((item) => (
                                <tr className="bg-neutral-primary border-b border-default">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                                    >
                                        <img src={item.image} alt={item.name} width={50} />
                                    </th>
                                    <td className="px-6 py-4">{item.name}</td>
                                    <td className="px-6 py-4">${item.price}</td>
                                    <td className="px-6 py-4">
                                        <button className="bg-red-500 text-white px-4 py-2 rounded-md">
                                            Xóa
                                        </button>
                                        <Link
                                            className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                            to={`/admin/products/${item.id}/edit`}
                                        >
                                            Sửa
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <div>Không có sản phẩm</div>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductList;
