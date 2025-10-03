import Greeting from "./components/Greeting.jsx";
import ProductCard from "./components/ProductCard.jsx";
import Card from "./components/Card.jsx";
import Comment from "./components/Comment.jsx";



export default function App() {
  return (
    <div>
      <h2>Soal1:</h2>
      <Greeting nama="Budi" />
      <h2>Soal2:</h2>
      <ProductCard
      productName="Sepatu"
      price={2500000}
      stock={10}
      isAvaible={true}
      />
       <ProductCard 
        productName="T-Shirt"
        price={80000}
        stock={5}
        isAvaible={true}
      />
      <ProductCard 
        productName="Pants"
      />
      <h2>Soal3:</h2>
      <Card>
        <h2>Perkenalkan Nama Saya</h2>
        <p>Irgi Harnoyo</p>
      </Card>

      <Card>
        <img src="foto1.jpg" 
        style={{width: "100px", height: "50%"}}
        />
        <p style={{textAlign: "center"}}>Ini muka saya dan muka kecil saya </p>
      </Card>

      <Card>
        <h3>Tekan</h3>
        <button>Klik Langsung</button>
      </Card>
     <h2>Soal4:</h2>
     <h4>Daftar Komen:</h4>
<Comment 
  user={{ name: "Ucup", avatarUrl: "/foto1.jpg" }} 
  text="Halo, saya Ucup. Saya jago banget ngoding boss, saya ni mas develop "
  
/>

<Comment 
  user={{ name: "Irgi", avatarUrl: "/foto1.jpg" }} 
  text="Mantap banget bang tutorin dong"
/>



    </div>
  );
}

