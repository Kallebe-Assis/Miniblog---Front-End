import React, { Component } from "react";
import { Post, PostImg, TituloConteudo, PostTitulo, Popup, PopupTexto, BotaoFechar, ComponentePostsDiv, PostTexto, BotaoDeletar, BotaoLerMais, BotaoDiv } from "./../StyledComponents";


class ComponentePosts extends Component {
  state = {
    titulo: "",
    conteudo: "",
    mostrarConteudoCompleto: false,
    postSelecionado: null
  };

  // handlePostCreation = () => {
    // const { titulo, conteudo, imagem, posts, setPosts } = this.props;
  // };

  // Função para alternar a exibição do conteúdo
  abrirPopup = (post) => {
    this.setState({
      mostrarConteudoCompleto: true,
      postSelecionado: post, //Define o post exibido no popup
    });
  };

  fecharPopup = () => {
    this.setState({
      mostrarConteudoCompleto: false,
      postSelecionado: null,
    });
  };

  deletarPost = (id) => {
    const novosPosts = this.props.posts.filter(post => post.id !== id);
    this.props.setPosts(novosPosts);
  };

  render() {
    const { posts } = this.props; // Recebe os posts via props
    const { mostrarConteudoCompleto, postSelecionado } = this.state;

    

    const imagemPadrao =
      "https://voxnews.com.br/wp-content/uploads/2017/04/unnamed.png";
    const limiteDeCaracteres = 550;

    // Verifica se posts é um array e se existe
    if (!posts || !Array.isArray(posts)) {
      return <div>Nenhum post disponível</div>;
    }

    return (
      <ComponentePostsDiv>
        {posts.map((post, index) => (
          <Post key={post.id}>

             <PostImg
              src={post.imagem || imagemPadrao}
              alt={post.titulo || "Imagem padrão"}
            />

            <TituloConteudo>
              <PostTitulo>{post.titulo}</PostTitulo>
              <PostTexto>
                {
                post.conteudo.length <= limiteDeCaracteres
                  ? post.conteudo
                  : `${post.conteudo.substring(0, limiteDeCaracteres)}...`}
              </PostTexto>

              {post.conteudo.length > limiteDeCaracteres && (
                <BotaoDiv onClick={this.alternarConteudo}>
                  <BotaoLerMais onClick={() => this.abrirPopup(post)}>Ler mais</BotaoLerMais>
                </BotaoDiv>
              )}
              <BotaoDiv>
              <BotaoDeletar onClick={() => this.deletarPost(post.id)}>Deletar</BotaoDeletar>
              </BotaoDiv>
            </TituloConteudo>
            
              
           
              {mostrarConteudoCompleto && postSelecionado && (
                <Popup>
                  <PopupTexto>
                    <h2>{postSelecionado.titulo}</h2>
                    <p>{postSelecionado.conteudo}</p>

                  </PopupTexto>
                  <BotaoFechar onClick={this.fecharPopup}>FECHAR</BotaoFechar>

                </Popup>
              )}
          </Post>
        ))}
        
      </ComponentePostsDiv>
    );
  }
}

export default ComponentePosts;