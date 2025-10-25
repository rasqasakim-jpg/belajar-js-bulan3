import React from "react";

interface Props {
  x: number;
  y: number;
}

const MousePositionText: React.FC<Props> = ({ x, y }) => {
  return (
    <p>
      🖱️ Posisi mouse: <strong>{x}</strong>, <strong>{y}</strong>
    </p>
  );
};

export default MousePositionText;
