import React from "react";

const styles = {
  card: {
    margin: 20,
    background: "#e8eaf6"
  },
  heading: {
    background: "#3f51b5",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px"
  },
  content: {
    padding: 20
  }
};

function Card() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Projects</div>
      <div style={styles.content}>
        
      </div>
    </div>
  );
}

export default Card;
