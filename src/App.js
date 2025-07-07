import KanjiBox from "./components/KanjiBox";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import Themes from "./components/Themes";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import Font from "./components/Font";
import Section from "./components/Section";
import Radicais from "./components/Radicais";

function App() {
  const [selectedTheme, setSelectedTheme] = useState("3");
  const [selectedFont, setSelectedFont] = useState("1");
  const [loader, setLoader] = useState(true);
  const [searchMade, setSearchMade] = useState(false);
  const [kanjiData, setKanjiData] = useState(null);
  const [kanjiSearched, setKanjiSearched] = useState("");

  useEffect(() => {}, [kanjiData]);

  const handleThemeChange = (event) => {
    setSelectedTheme(event.target.value);
  };

  const handleFontChange = (event) => {
    setSelectedFont(event.target.value);
  };

  const themeStyles = {
    1: { background: "#91AD70" },
    2: { background: "#C73E3A" },
    3: { background: "#268785" },
  };

  const fontStyles = {
    1: { fontFamily: "Zen Kurenaido, sans-serif" },
    2: { fontFamily: "Noto Sans JP, sans-serif" },
  };

  const font = fontStyles[selectedFont];
  const currentTheme = themeStyles[selectedTheme];
  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <main>
          <Logo />
          <div className="flexSearchBarAndThemes">
            <SearchBar
              setKanjiData={setKanjiData}
              setSearchMade={setSearchMade}
              setLoader={setLoader}
              setKanjiSearched={setKanjiSearched}
            />
            <div className="themesAndFont">
              <Themes
                handleThemeChange={handleThemeChange}
                selectedTheme={selectedTheme}
              />
              <Font
                selectedFont={selectedFont}
                handleFontChange={handleFontChange}
              />
            </div>
          </div>
          <div>
            <KanjiBox
              kanjiSearched={kanjiSearched}
              loader={loader}
              font={font}
            />
            {kanjiData && <Radicais radicais={kanjiData?.radicais} />}
          </div>
          <div className="contentFlex">
            {searchMade && loader ? (
              <div className="loader" />
            ) : (
              kanjiData && (
                <>
                  <Section
                    tittle="Explicação dos Radicais"
                    content={kanjiData?.explicacao_radicais}
                  />
                  <Section
                    tittle="Contexto de Criação"
                    content={kanjiData?.contexto_criacao}
                  />
                  <Section
                    tittle="Mnemônico para lembrar"
                    content={kanjiData?.mnemonica}
                  />
                  <Section
                    tittle="Palavras comuns"
                    mapInfo={kanjiData?.palavras_comuns}
                  />
                </>
              )
            )}
          </div>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
