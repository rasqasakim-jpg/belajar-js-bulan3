import React, { useState } from "react";

export default function ShoppingList() {
  const [showList, setShowList] = useState(false); // kontrol tampilan daftar
  const [items, setItems] = useState([
    { id: 1, name: "Spakbor", checked: false },
    { id: 2, name: "Knalpot", checked: false },
    { id: 3, name: "Velg", checked: false },
    { id: 4, name: "Ban", checked: false },
  ]);

  const handleShowList = () => {
    setShowList(true);
  };

  const toggleCheck = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleDeleteSelected = () => {
    const selectedItems = items.filter((item) => item.checked);
    if (selectedItems.length === 0) {
      alert("Pilih minimal satu produk untuk dihapus!");
      return;
    }

    const selectedNames = selectedItems.map((item) => item.name).join(", ");
    alert(`Produk dihapus: ${selectedNames}`);

    setItems((prev) => prev.filter((item) => !item.checked));
  };

  return (
    <div
      style={{
        textAlign: "center",
        border: "1px solid",
        marginTop: "40px",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        padding: "20px",
        width: "320px",
        margin: "auto",
      }}
    >
      <h2>Daftar Shopping</h2>

      {!showList ? (
        <button
          onClick={handleShowList}
          style={{
            backgroundColor: "#32b132ff",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Lihat Daftar Belanja
        </button>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {items.map((item) => (
              <li
                key={item.id}
                style={{
                  textAlign: "left",
                  margin: "8px 0",
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  padding: "8px",
                  boxShadow: "0 0 3px rgba(0,0,0,0.1)",
                }}
              >
                <label>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => toggleCheck(item.id)}
                    style={{ marginRight: "8px" }}
                  />
                  {item.name}
                </label>
              </li>
            ))}
          </ul>

          <button
            onClick={handleDeleteSelected}
            style={{
              backgroundColor: "#e74c3c",
              color: "white",
              border: "none",
              padding: "8px 15px",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Hapus Produk
          </button>
        </>
      )}
    </div>
  );
}
