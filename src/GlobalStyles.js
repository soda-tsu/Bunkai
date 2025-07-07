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
  grid-template: 76px 1fr / 105px 1fr 387px;
  gap: 1.6rem;
  margin-bottom: 9.6rem;
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
.contentFlex{
position: relative;
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
}
  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
`;
