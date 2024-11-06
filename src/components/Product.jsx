/* eslint-disable react/prop-types */
const Product = (props) => {
    console.log(props); // { name: "Sản phẩm A", price: 200}
    return (
        <div>
            <h2>Tên sản phẩm :{props.name}</h2>
            <p>Giá: {props.price}</p>
        </div>
    );
};
export default Product;
