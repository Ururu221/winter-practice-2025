import React from "react";

function PaletteList({ palettes, onPaletteClick }) {
  return (
    <div style={styles.container}>
      {palettes.map((palette) => (
        <div
          key={palette.id}
          style={styles.paletteItem}
          onClick={() => onPaletteClick(palette)}
        >
          <h2>{palette.paletteName} {palette.emoji}</h2>
          {/* Як прев’ю можна показати кілька кольорів */}
          <div style={styles.colorsPreview}>
            {palette.colors.slice(0, 5).map((colorObj) => (
              <div
                key={colorObj.name}
                style={{
                  backgroundColor: colorObj.color,
                  width: 20,
                  height: 20,
                  marginRight: 4
                }}
              ></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "1rem",
    padding: "1rem"
  },
  paletteItem: {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    padding: "1rem",
    borderRadius: "8px",
    cursor: "pointer"
  },
  colorsPreview: {
    display: "flex",
    marginTop: "10px"
  }
};

export default PaletteList;
