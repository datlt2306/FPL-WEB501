/* eslint-disable react/prop-types */
const Product = ({ name, price }) => {
    return (
        <div>
            <h2>Tên sản phẩm :{name}</h2>
            <p>Giá: {price}</p>
        </div>
    );
};
export default Product;
