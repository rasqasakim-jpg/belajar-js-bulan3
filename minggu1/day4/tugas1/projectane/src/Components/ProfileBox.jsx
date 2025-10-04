export default function ProfileBox() {
  const boxStyle = {
    border: "2px solid rgba(250, 250, 253, 1)",
    borderRadius: "12px",
    padding: "16px",
    width: "300px",
    backgroundColor: "#f5f4fdff",
    textAlign: "center",
     marginLeft: "400px"
  };

  const nameStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#000000ff",
    margin: "8px 0",
  };

  const bioStyle = {
    fontSize: "14px",
    color: "rgba(250, 252, 255, 1)",
    lineHeight: 1.4,
    textAlign: "center",
  };

  return (
    <div style={boxStyle}>
      <img
        src="foto1.jpg"
        alt="Profile Avatar"
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          marginBottom: "12px",
          border: "3px solid #000000ff",
        }}
      />
        <h3 style={nameStyle}>Ucup Racing</h3>
      <div style={{ 
        textAlign: "center",
        backgroundColor: "grey",
        padding: "20px",
       }}>
      <p style={bioStyle}>Full Stack Developer.</p>
      </div>
    </div>
  );
}
