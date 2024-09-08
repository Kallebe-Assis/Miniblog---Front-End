import React, { useState } from 'react'; // Importar useState do React
import ComponentePosts from "./ComponentePosts";



function App() {

  const [componenteExibido, setComponenteExibido] = useState(false); // Estado para controlar a exibição

  const handleClick = () => {
    // Define o estado para mostrar o componente
    setComponenteExibido(true);
  };

  return (
    <>
      <h1>MINIBLOG</h1>
      <img src="https://user-images.githubusercontent.com/14011726/94132137-7d4fc100-fe7c-11ea-8512-69f90cb65e48.gif" alt="Homer Simpsons"/>
      <input type="text" placeholder="Insira o título do seu post"></input>
      <textarea type="text" placeholder="Insira o conteúdo do seu post"></textarea>
      <input type="url" placeholder="Insira a imagem do seu post (Opcional)"></input>
      <button onClick={handleClick}>Criar Post</button>

      {componenteExibido && <ComponentePosts />}

      {/* <ComponentePosts/> */}
    </>
  )

}

export default App;

// props das informações (titulo, conteudo e link da imagem)
// estilizar o modelo e formato da div do postMessage
// criar botão deletar
// criar opção de "Ver mais"
// imagem padrão