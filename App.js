import React, { useState } from "react"; // Importar useState do React
import ComponentePosts from "./ComponentePosts";
import "./styles.css";

function App() {
  const [componenteExibido, setComponenteExibido] = useState(false); // Estado para controlar a exibição

  const handleClick = () => {
    // Define o estado para mostrar o componente
    setComponenteExibido(true);
  };

  return (
    <>
      <div className="cabecalho">
        <h1>MINIBLOG</h1>
        <img
          src="https://64.media.tumblr.com/9ac5a447780cf383a5797b90bbf9ff9f/e8eab754f1696c68-99/s480x360/ad317a21258991cfb4a4a4341a19fa04e6ec965e.gif"
          // src="https://pa1.aminoapps.com/6735/eec96583c81bb057c652cc0605d946556a7d841d_hq.gif"
          alt="Homer Simpsons"
        />
      </div>

      <div className="inputs">
        <input type="text" placeholder="Insira o título do seu post"></input>
        <textarea
          type="text"
          placeholder="Insira o conteúdo do seu post"
        ></textarea>
        <input
          type="url"
          placeholder="Insira a imagem do seu post (Opcional)"
        ></input>
        <button onClick={handleClick} className="botaoCriar">
          Criar Post
        </button>
      </div>
      {componenteExibido && <ComponentePosts />}

      {/* <ComponentePosts/> */}
    </>
  );
}

export default App;

// props das informações (titulo, conteudo e link da imagem)
// estilizar o modelo e formato da div do postMessage
// criar botão deletar
// criar opção de "Ver mais"
// imagem padrão
