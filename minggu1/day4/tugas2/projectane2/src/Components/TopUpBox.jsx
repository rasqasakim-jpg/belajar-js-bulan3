import "./TopUpBox.css";

export default function TopUpBox() {
  return (
    <div className="topup-card">
      <h2 className="title">Top Up Termurah</h2>
      <p className="desc">Pilih mau beli berapa diamonds</p>

      <div className="options">
        <button className="btn">50 Diamonds</button>
        <button className="btn">100 Diamonds</button>
        <button className="btn">250 Diamonds</button>
      </div>

      <button className="btn pay">Bayar Sekarang</button>
    </div>
  );
}
