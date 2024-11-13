import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body {
  box-sizing: border-box;
  
  background-color:${(props) =>
    props.theme ? props.theme.background : "#91AD70"} ;
  width: 90%;
  margin: 0 auto;
  padding: 2rem 0 0 0;
}

html {
  font-size: 62.5%;
}
main{
  display: grid;
  grid-template: 1fr / 105px 1fr 387px;
  gap: 1.6rem;
}
.flexSearchBarAndThemes{
  display: flex;
  justify-content: space-between;
}
.themesAndFont{
  display: flex;
  gap: 1.6rem; 
  flex-direction: column;
}
`;
