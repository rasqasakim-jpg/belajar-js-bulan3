function Expression() {
  const nama = "Irgi";
  const hargaAsli = 100000;
  const diskon = 0.2;
  const hargaSetelahDiskon = hargaAsli - hargaAsli * diskon;

  function sapaan(user) {
    return `Halo, ${user} Selamat Datang`;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>{sapaan(nama)}</h2>
      <p>Harga asli: Rp {hargaAsli}</p>
      <p>Diskon: {diskon * 100}%</p>
      <p><strong>Harga setelah diskon: Rp {hargaSetelahDiskon}</strong></p>
      <p>Jumlah huruf pada namamu: {nama.length}</p>
    </div>
  );
}

export default Expression;

