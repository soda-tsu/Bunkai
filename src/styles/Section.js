import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  .toggle-button {
    background-color: rgba(255, 255, 255, 0.1);
    border: none;
    color: #fff;
    font-size: 1.6rem;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 4px;
  }
  .tittle {
    font-size: 4rem;
    font-weight: 400;
    font-family: "Zen Kurenaido", sans-serif;
    color: #fff;
    letter-spacing: 0.1rem;
    text-decoration: underline;
    text-underline-offset: 1rem;
    text-decoration-thickness: 1px;
  }
  .content {
    font-size: 2rem;
    font-weight: 300;
    font-family: "Noto Sans JP", sans-serif;
    color: #fff;
    letter-spacing: 0.1rem;
    line-height: 1.8;
  }
  .exemplos {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin-top: 1.6rem;
    margin-bottom: 0.8rem;
    .furigana {
      font-size: 1.6rem;
      font-weight: 300;
      font-family: "Noto Sans JP", sans-serif;
      color: #fff;
      letter-spacing: 0.1rem;
    }
    .palavra {
      padding: 0.8rem 0;
      font-size: 2.8rem;
      font-weight: 300;
      font-family: "Noto Sans JP", sans-serif;
      color: #fff;
      letter-spacing: 0.1rem;
    }
    .significado {
      font-size: 1.6rem;
      font-weight: 300;
      font-family: "Noto Sans JP", sans-serif;
      color: #fff;
      letter-spacing: 0.1rem;
    }
    .contexto {
      font-size: 2rem;
      font-weight: 300;
      font-family: "Noto Sans JP", sans-serif;
      color: #fff;
      letter-spacing: 0.1rem;
    }
  }
`;
