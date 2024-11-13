import styled from "styled-components";

export const StyledKanjiBox = styled.div`
  position: relative;
  width: 387px;
  height: 387px;
  box-shadow: inset 0 0 0 16px #fff;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    border-top: 1px dashed #fff;
    transform: translateY(-50%);
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    height: 100%;
    border-left: 1px dashed #fff;
    transform: translateX(-50%);
    z-index: 2;
  }

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 24rem;
    font-weight: 400;
    font-family: ${(props) =>
      props.font.fontFamily || "Zen Kurenaido, sans-serif"};
  }
`;
