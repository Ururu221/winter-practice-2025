import React, { useState } from "react";
import PaletteList from "./components/PaletteList";
import Palette from "./components/Palette";
import FullScreenColor from "./components/FullScreenColor";
import Header from "./components/Header";
import palleteData from "./pallete.json";
import "./index.css";

function App() {
  // Стан для обраної палітри та обраного кольору
  const [selectedPalette, setSelectedPalette] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  // Логіка відображення конкретного кольору на весь екран
  const [showFullScreen, setShowFullScreen] = useState(false);

  const handlePaletteClick = (palette) => {
    setSelectedPalette(palette);
    setSelectedColor(null);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowFullScreen(true);
  };

  const closeFullScreen = () => {
    setShowFullScreen(false);
  };

  return (
    <div className="App">
      <Header />

      {/* Якщо палітра не обрана, показуємо список палітр */}
      {!selectedPalette && (
        <PaletteList
          palettes={palleteData}
          onPaletteClick={handlePaletteClick}
        />
      )}

      {/* Якщо палітра обрана, показуємо список кольорів з неї */}
      {selectedPalette && !showFullScreen && (
        <Palette palette={selectedPalette} onColorClick={handleColorClick} />
      )}

      {/* Якщо обраний колір для повноекранного перегляду */}
      {showFullScreen && selectedColor && (
        <FullScreenColor
          color={selectedColor}
          onClose={closeFullScreen}
        />
      )}
    </div>
  );
}

export default App;
