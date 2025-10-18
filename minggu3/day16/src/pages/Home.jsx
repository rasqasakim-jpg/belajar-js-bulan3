import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(res => res.json())
      .then(data => setProducts(data.slice(0,12)))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1 className="page-title">Products</h1>
      <div className="products-grid">
        {products.map(p => (
          <Link
            to={`/products/${p.id}`}
            key={p.id}
            className="product-card"
          >
            <img src={p.images[0]} alt={p.title}/>
            <div className="info">
              <h2>{p.title}</h2>
              <p>${p.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
