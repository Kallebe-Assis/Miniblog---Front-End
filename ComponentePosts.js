import React, { Component } from "react";
import "./styles.css";

class ComponentePosts extends Component {
  state = {
    titulo: "",
    conteudo: "",
    mostrarConteudoCompleto: false,
  };

  // Função para alternar a exibição do conteúdo
  alternarConteudo = () => {
    this.setState((prevState) => ({
      mostrarConteudoCompleto: !prevState.mostrarConteudoCompleto,
    }));
  };

  render() {
    const { posts } = this.props; // Recebe os posts via props
    const { mostrarConteudoCompleto } = this.state;

    const imagemPadrao =
      "https://voxnews.com.br/wp-content/uploads/2017/04/unnamed.png";
    const limiteDeCaracteres = 50;

    // Verifica se posts é um array e se existe
    if (!posts || !Array.isArray(posts)) {
      return <div>Nenhum post disponível</div>;
    }

    return (
      <div>
        {posts.map((post, index) => (
          <div key={index} className="post">
            <div className="tituloConteudo">
              <h2>{post.titulo}</h2>
              <p>
                {mostrarConteudoCompleto ||
                post.conteudo.length <= limiteDeCaracteres
                  ? post.conteudo
                  : `${post.conteudo.substring(0, limiteDeCaracteres)}...`}
              </p>

              {post.conteudo.length > limiteDeCaracteres && (
                <button onClick={this.alternarConteudo}>
                  {mostrarConteudoCompleto ? "Ler menos" : "Ler mais"}
                </button>
              )}
            </div>

            <img
              src={post.imagem || imagemPadrao}
              alt={post.titulo || "Imagem padrão"}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default ComponentePosts;
