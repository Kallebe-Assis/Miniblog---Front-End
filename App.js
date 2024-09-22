import React, { useState } from "react"; // Importar useState do React
import ComponentePosts from "./Component/ComponentePosts";
import ComponenteHeader from "./Component/ComponenteHeader";
import ComponenteInputs from "./Component/ComponenteInputs";
import {GlobalStyle} from './GlobalStyles';

import styled from "styled-components";


function App() {
  const [componenteExibido, setComponenteExibido] = useState(false); // Estado para controlar a exibição
  const [posts, setPosts] = useState([]); // Controla os posts criados
  const [titulo, setTitulo] = useState(""); // Controla o título do post
  const [conteudo, setConteudo] = useState(""); // Controla o conteúdo do post
  const [imagem, setImagem] = useState(""); // Controla a URL da imagem (opcional)


  const onClickNovoPost = () => {
    const novoPost = {id: Date.now(), titulo, conteudo, imagem };
    if (titulo && conteudo) {
      setPosts([...posts, novoPost]); // Adiciona o novo post à lista de posts
    }
    setTitulo(""); // Limpa o campo de título
    setConteudo(""); // Limpa o campo de conteúdo
    setImagem(""); // Limpa o campo de URL de imagem (opcional)
    setComponenteExibido(true); // Define o estado para mostrar o componente
  };




  return (
    <div>
      <GlobalStyle />
      <ComponenteHeader />
      <ComponenteInputs
        titulo={titulo}
        conteudo={conteudo}
        imagem={imagem}
        setTitulo={setTitulo} // Passando a função para atualizar o título
        setConteudo={setConteudo} // Passando a função para atualizar o conteúdo
        setImagem={setImagem} // Passando a função para atualizar a imagem
        onClickNovoPost={onClickNovoPost}
      />
      <ComponentePosts posts={posts} setPosts = {setPosts}/>
    </div>
      );
}

export default App;

// criar botão deletar
// criar opção de "Ver mais"