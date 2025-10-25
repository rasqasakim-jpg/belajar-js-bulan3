import React, { useState } from "react";
import Modal from "./Modal";

const AppContent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h2>React Portal Modal</h2>
      <button onClick={() => setIsOpen(true)}>Buka Modal</button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h3>Halo boot!</h3>
        <p>Ini modal yang dirender lewat React Portal </p>
      </Modal>
    </div>
  );
};

export default AppContent;
