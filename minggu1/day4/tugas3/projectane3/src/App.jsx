import Button from './Components/Button';

export default function App() {
  return (
    <div style={{ padding: 24, fontFamily: 'Segoe UI, Roboto, Arial', display: 'grid', gap: 12, justifyContent: 'center' }}>
      <h2>Liburan Ke Jepang</h2>
      <p>Acc Gak?</p>

      <div style={{ display: 'flex', gap: 12 }}>
        <Button variant="Gak" onClick={() => alert('Kurang setuju')}>
          Gak
        </Button>

        <Button variant="Acc" onClick={() => alert('Acc pol')}>
          Acc
        </Button>
      </div>
    </div>
  );
}
