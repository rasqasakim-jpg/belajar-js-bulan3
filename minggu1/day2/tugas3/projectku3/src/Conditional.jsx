function Conditional() {
  const isLoggedIn = true; 
  const belumDibaca = 3;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>{isLoggedIn ? "Selamat datang kembali, Irgi!" : "Silakan login dulu."}</h2>

      {belumDibaca > 0 && (
        <p>Kamu punya {belumDibaca} pesan baru </p>
      )}
    </div>
  );
}

export default Conditional;
