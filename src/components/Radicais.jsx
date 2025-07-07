import React from "react";
import { StyledRadicais } from "../styles/Radicais";

function Radicais({ radicais }) {
  return (
    <StyledRadicais>
      <h2>Radicais</h2>
      {radicais?.map((item, index) => (
        <div className="radicalFlex" key={index}>
          <strong>{item.radical}</strong>
          <p>{item.significado}</p>
        </div>
      ))}
    </StyledRadicais>
  );
}

export default Radicais;
