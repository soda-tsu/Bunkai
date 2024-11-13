import React from "react";
import { StyledThemes } from "../styles/Themes";

function Themes({ handleThemeChange, selectedTheme }) {
  return (
    <StyledThemes onChange={handleThemeChange} value={selectedTheme}>
      <option value="1">Machá</option>
      <option value="2">Kurenai</option>
      <option value="3">Umi</option>
    </StyledThemes>
  );
}

export default Themes;
