import React, { useEffect } from "react";

function FullScreenColor({ color, onClose }) {
  // Автоматично копіюємо код кольору та програємо звук
  useEffect(() => {
    // Копіювання в буфер обміну
    navigator.clipboard.writeText(color.color).catch((err) => {
      console.error("Не вдалося скопіювати колір до буферу: ", err);
    });

    // Програвання звуку (завантажити sound.mp3 у public чи замінити на своє)
    const audio = new Audio("/src_notify.mp3"); 
    audio.play().catch((err) => console.error("Помилка відтворення аудіо:", err));
  }, [color]);

  return (
    <div style={{ ...styles.overlay, backgroundColor: color.color }}>
      <button style={styles.closeButton} onClick={onClose}>
        Назад
      </button>
      <div style={styles.info}>
        <h2>{color.name}</h2>
        <p>{color.color} (скопійовано)</p>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  info: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    color: "#fff",
    padding: "1rem 2rem",
    borderRadius: "8px"
  },
  closeButton: {
    position: "absolute",
    top: "20px",
    right: "20px",
    background: "rgba(255, 255, 255, 0.8)",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    fontWeight: "bold"
  }
};

export default FullScreenColor;
