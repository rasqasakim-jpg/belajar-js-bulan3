export default function ProductCard({productName, price, stock, isAvaible}) {
 const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    width: "250px",
    margin: "10px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  };

  return (
    <div style={cardStyle}>
      <h2>{productName}</h2>
      <p> Harga: Rp {price}</p>
      <p> Stok: {stock}</p>
      <p>
        {isAvaible ? " Produk Tersedia" : " Produk Habis"}
      </p>
    </div>
  );
}

ProductCard.defaultProps = {
  price: 0,
  stock: 0,
  isAvailable: false,
};
