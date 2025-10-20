import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        if (searchQuery) {
          const filtered = data.filter((product) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
          setProducts(filtered);
        } else {
          setProducts(data);
        }
      });
  }, [searchQuery]);

  const handleSearch = (e) => {
    const value = e.target.value;
    if (value) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div>
      <h1 style={{textAlign: "center"}}>Jelajahi Produk Kami</h1>
      <input
        type="text"
        placeholder="Cari produk..."
        onChange={handleSearch}
        defaultValue={searchQuery}
        style={{ padding: "8px", marginBottom: "20px", width: "300px" }}
      />

      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="product-card"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img src={product.images[0]} alt={product.title} width="150" />
              <h3>{product.title}</h3>
              <p>{product.price} USD</p>
            </Link>
          ))
        ) : (
          <p>Tidak ada produk ditemukan</p>
        )}
      </div>
    </div>
  );
}
