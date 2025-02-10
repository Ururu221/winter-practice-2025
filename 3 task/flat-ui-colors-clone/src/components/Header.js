import React from "react";

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Аналог flatuicolors, (перезавантаживши сторінку можна вийти з обраної палітри)</h1>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#f0f0f0",
    padding: "10px",
    textAlign: "center",
    borderBottom: "1px solid #ccc"
  },
  title: {
    margin: 0
  }
};

export default Header;
