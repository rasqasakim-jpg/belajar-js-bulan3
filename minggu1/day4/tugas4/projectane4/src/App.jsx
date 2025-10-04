import AlertBox from "./Components/AlertBox";

export default function App() {
  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <h2>AlertBox pakai Switch</h2>

      <AlertBox type="success" message=" Data berhasil disimpan!" />
      <AlertBox type="warning" message=" Mohon periksa kembali input Anda." />
      <AlertBox type="error" message=" Terjadi kesalahan sistem." />
      <AlertBox message=" Ini alert default (abu-abu)" />
    </div>
  );
}
