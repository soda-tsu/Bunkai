import React from "react";
import { StyledSection } from "../styles/Section";
import Furigana from "./Furigana";

function Section({ tittle, content, mapInfo }) {
  return (
    <StyledSection>
      <h2 className="tittle">{tittle}</h2>
      {content && <p className="content">{content}</p>}
      {mapInfo &&
        mapInfo.map((item, index) => (
          <div key={index} className="exemplos">
            <div>
              <Furigana item={item} />
              <p className="palavra">{item.palavra}</p>
            </div>
            <p className="significado">
              <strong>Tradução: </strong>
              {item.significado}
            </p>
            <p className="contexto">{item.contexto}</p>
          </div>
        ))}
    </StyledSection>
  );
}

export default Section;
