import React from "react";
import { StyledKanjiBox } from "../styles/KanjiBox";
import { useState, useEffect } from "react";

function KanjiBox({ font, kanjiSearched, loader }) {
  useEffect(() => {}, [loader]);
  return (
    <StyledKanjiBox font={font}>
      <p>{kanjiSearched && !loader ? kanjiSearched : "?"}</p>
    </StyledKanjiBox>
  );
}

export default KanjiBox;
