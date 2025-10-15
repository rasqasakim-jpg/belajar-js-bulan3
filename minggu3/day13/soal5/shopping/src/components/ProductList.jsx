import React, {useContext} from "react";
import { CartContext } from "../context/CartContext";

const products = [
    {id: 1, name: "Iphone13", price: 15000000},
    {id: 2, name: "Charger", price: 100000},
    {id: 3, name: "Silikon", price: 50000},
];

export default function ProductList() {
    const {addItem} = useContext(CartContext);

    return (
        <div>
            <h2>Product</h2>
            {products.map((product) => (
                <div key={product.id} style={{marginBottom: "10px"}}>
                    {product.name} - ${product.price}
                    <button onClick={() => addItem(product)} style={{marginLeft: "10px"}}>
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    );
}