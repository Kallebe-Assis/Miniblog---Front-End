import React, { useState } from "react"; // Importar useState do React
import ComponentePosts from "./ComponentePosts.js";
import "./styles.css";

function App() {
  const [componenteExibido, setComponenteExibido] = useState(false); // Estado para controlar a exibição
  const [posts, setPosts] = useState([]); // Controla os posts criados
  const [titulo, setTitulo] = useState(""); // Controla o título do post
  const [conteudo, setConteudo] = useState(""); // Controla o conteúdo do post
  const [imagem, setImagem] = useState(""); // Controla a URL da imagem (opcional)

  const handleClick = () => {
    const novoPost = { titulo, conteudo, imagem };
    if (titulo && conteudo) {
      setPosts([...posts, novoPost]); // Adiciona o novo post à lista de posts
    }
    setTitulo(""); // Limpa o campo de título
    setConteudo(""); // Limpa o campo de conteúdo
    setImagem(""); // Limpa o campo de URL de imagem (opcional)
    setComponenteExibido(true); // Define o estado para mostrar o componente
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
        <input
          type="text"
          placeholder="Insira o título do seu post"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)} // Atualiza o estado do título
        ></input>

        <textarea
          type="text"
          placeholder="Insira o conteúdo do seu post"
          value={conteudo}
          onChange={(e) => setConteudo(e.target.value)} // Atualiza o estado do conteúdo
        ></textarea>

        <input
          type="url"
          placeholder="Insira a imagem do seu post (Opcional)"
          value={imagem}
          onChange={(e) => setImagem(e.target.value)} // Atualiza o estado da imagem
        ></input>

        <button onClick={handleClick} className="botaoCriar">
          Criar Post
        </button>
      </div>
      <ComponentePosts posts={posts} />

      {/* <ComponentePosts/> */}
    </>
  );
}

export default App;

// criar botão deletar
// criar opção de "Ver mais"
