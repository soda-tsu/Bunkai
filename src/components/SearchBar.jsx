import React from "react";
import { StyledSearchBar } from "../styles/SearchBar";
import searchIcon from "../assets/searchIcon.png";
import { useState } from "react";

function SearchBar({
  setSearchMade,
  setLoader,
  setKanjiData,
  setKanjiSearched,
}) {
  const [inputValue, setInputValue] = useState("");
  console.log(process.env.REACT_APP_GPT_API_KEY);

  async function onSubmit(e) {
    e.preventDefault();
    setSearchMade(true);
    setLoader(true);
    setKanjiSearched(inputValue);

    const prompt = `
    Explique detalhadamente o kanji 「${inputValue}」 e retorne a resposta no seguinte formato JSON:
    
    {
      "radicais": [
        {
          "radical": "⺅",
          "significado": "pessoa"
        }
      ],
      "significado_principal": "entender",
      "contexto_criacao": "Explique a ideia por trás da criação deste kanji, como uma metáfora visual. Por exemplo, no kanji 分 (entender), usa-se a imagem de uma katana cortando algo em partes, simbolizando que para entender algo, é melhor dividi-lo. Crie uma explicação semelhante para este kanji.",
      "explicacao_radicais": "Explique por que esses radicais foram usados para compor este kanji e o que cada um contribui para o significado.",
      "mnemonica": "Crie uma frase ou imagem mental fácil de lembrar este kanji, com base nos radicais e significado.",
      "palavras_comuns": [
        {
          "palavra": "働く",
          "leitura": "はたらく",
          "significado": "trabalhar",
          "contexto": "Usada para indicar ação profissional ou esforço, como em 'trabalhar em uma empresa'."
        },
        {
          "palavra": "労働",
          "leitura": "ろうどう",
          "significado": "trabalho (em geral)",
          "contexto": "Usada em contextos mais formais ou institucionais, como 'leis do trabalho'."
        }
      ]
    }
    
    Regras:
    - Liste **todos os radicais envolvidos no kanji**, mesmo os menores ou menos evidentes.
    - Para "significado_principal", use **no máximo duas palavras** em português que mais representem o sentido central do kanji.
    - A explicação no campo "contexto_criacao" deve ser uma metáfora ou lógica simbólica visual usada na origem do kanji.
    - Não adicione nenhuma explicação fora do JSON.
    Responda em português.
    `;
    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_GPT_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-4o",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.7,
          }),
        }
      );

      const data = await response.json();
      console.log("eu sou o data");
      console.log(data);

      const rawText = data.choices[0].message.content;

      // Tenta transformar a resposta em JSON
      const jsonStart = rawText.indexOf("{");
      const jsonEnd = rawText.lastIndexOf("}");
      const jsonText = rawText.slice(jsonStart, jsonEnd + 1);
      const parsed = JSON.parse(jsonText);

      // Exemplo: passar os dados para um pai
      setKanjiData(parsed);
      console.log("eu sou o parsed");
      console.log(parsed);
    } catch (error) {
      console.error("Erro ao consultar o GPT:", error);
    } finally {
      setLoader(false);
      setInputValue("");
    }
  }

  return (
    <StyledSearchBar onSubmit={onSubmit}>
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="Digite o kanji"
      />
      <button type="submit">
        <img src={searchIcon} alt="search icon" />
      </button>
    </StyledSearchBar>
  );
}

export default SearchBar;
