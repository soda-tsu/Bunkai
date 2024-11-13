import React from "react";
import { StyledKanjiBox } from "../styles/KanjiBox";

function KanjiBox({ font }) {
  return (
    <StyledKanjiBox font={font}>
      <p>生</p>
    </StyledKanjiBox>
  );
}

export default KanjiBox;
