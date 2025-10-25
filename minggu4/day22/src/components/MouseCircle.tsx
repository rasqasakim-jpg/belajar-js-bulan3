import React from "react";

interface Props {
  x: number;
  y: number;
}

const MouseCircle: React.FC<Props> = ({ x, y }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: x - 15,
        top: y - 15,
        width: 30,
        height: 30,
        borderRadius: "50%",
        backgroundColor: "black",
        pointerEvents: "none",
      }}
    />
  );
};

export default MouseCircle;
