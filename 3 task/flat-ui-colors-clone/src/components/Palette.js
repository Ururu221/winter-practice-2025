import React from "react";

function Palette({ palette, onColorClick }) {
  return (
    <div style={styles.container}>
      <h2>
        Палітра: {palette.paletteName} {palette.emoji}
      </h2>
      <div style={styles.colorsContainer}>
        {palette.colors.map((colorObj) => (
          <div
            key={colorObj.name}
            style={{
              ...styles.colorBox,
              backgroundColor: colorObj.color
            }}
            onClick={() => onColorClick(colorObj)}
          >
            <span style={styles.colorName}>{colorObj.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "1rem"
  },
  colorsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
    gap: "1rem",
    marginTop: "1rem"
  },
  colorBox: {
    position: "relative",
    height: "80px",
    cursor: "pointer",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    borderRadius: "8px",
    color: "#fff",
    fontWeight: "bold"
  },
  colorName: {
    marginBottom: "6px",
    fontSize: "0.9rem"
  }
};

export default Palette;
