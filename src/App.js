import KanjiBox from "./components/KanjiBox";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import Themes from "./components/Themes";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import Font from "./components/Font";

function App() {
  const [selectedTheme, setSelectedTheme] = useState("1");
  const [selectedFont, setSelectedFont] = useState("1");

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
            <SearchBar />
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
          <KanjiBox font={font} />
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
