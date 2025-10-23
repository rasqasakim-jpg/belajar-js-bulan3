import React from "react";

interface Product {
    id: number;
    name: string;
    price: number;
}

interface ProductListProps {
    title: string;
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, products }) => {

    return (
        <div className="product-list">
            <h2>{title}</h2>
            <ul>
                {products.map((item) => (
                    <li key={item.id}>
                        <span>{item.name}</span>
                        <span className="price">Rp {item.price.toLocaleString()}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;