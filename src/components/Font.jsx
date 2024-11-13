import React from "react";
import { StyledFont } from "../styles/Font";

function Font({ selectedFont, handleFontChange }) {
  return (
    <StyledFont onChange={handleFontChange} value={selectedFont}>
      <option value="1">Zen Kurenaido</option>
      <option value="2">Noto Sans JP</option>
    </StyledFont>
  );
}

export default Font;
