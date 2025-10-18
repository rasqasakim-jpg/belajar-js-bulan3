// src/pages/ProductDetail.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.log(err));
  }, [productId]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail">
      <h1>{product.title}</h1>
      <img src={product.images[0]} alt={product.title}/>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
}
