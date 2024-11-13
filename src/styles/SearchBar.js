import styled from "styled-components";

export const StyledSearchBar = styled.form`
  position: relative;
  height: 4rem;
  width: 366px;

  input {
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    padding: 0.8rem 1.6rem;
    font-size: 2rem;
  }
  button {
    position: absolute;
    top: 0;
    right: 0;
    width: 4rem;
    height: 100%;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;
