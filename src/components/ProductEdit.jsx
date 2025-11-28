import React from "react";
import { useParams } from "react-router-dom";

const ProductEdit = () => {
    const { id } = useParams();
    console.log(id);
    return <div>ProductEdit</div>;
};

export default ProductEdit;
