function ListExample() {
  const nama = ["Kahfi", "Zidane", "Ucup", "Farid", "Xena"];

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Daftar Siswa</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {nama.map((nama, index) => (
          <li key={index}> {nama}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListExample;
