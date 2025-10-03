export default function card(props) {
    const cardStyle = {
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "16px",
        margin: "10px",
        width: "300px"

    }
    return (
          <div style={cardStyle}>
            {props.children}
          </div> 
    );
}