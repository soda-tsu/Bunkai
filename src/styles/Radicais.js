import styled from "styled-components";

export const StyledRadicais = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  h2 {
    margin-top: 1.6rem;
    font-size: 4rem;
    font-weight: 400;
    font-family: "Zen Kurenaido", sans-serif;
    color: #fff;
    letter-spacing: 0.1rem;
    text-decoration: underline;
    text-underline-offset: 1rem;
    text-decoration-thickness: 1px;
  }
  .radicalFlex {
    display: flex;
    gap: 1.6rem;
    strong {
      font-size: 2rem;
      font-weight: 300;
      font-family: "Noto Sans JP", sans-serif;
      color: #fff;
      letter-spacing: 0.1rem;
    }
    p {
      font-size: 2rem;
      font-weight: 300;
      font-family: "Noto Sans JP", sans-serif;
      color: #fff;
      letter-spacing: 0.1rem;
    }
  }
`;
