import React from "react";
import { useState } from "react";
import { StyledSection } from "../styles/Section";

function Furigana({ item }) {
  const [showFurigana, setShowFurigana] = useState(false);
  return (
    <>
      <button
        className="toggle-button"
        onClick={() => setShowFurigana(!showFurigana)}
      >
        {showFurigana ? "Ocultar" : "Mostrar"}
      </button>
      {showFurigana && <p className="furigana">{item.leitura}</p>}
    </>
  );
}

export default Furigana;
