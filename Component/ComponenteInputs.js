import React, { Component } from "react";

class ComponenteInputs extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="inputs">
          <input
            type="text"
            placeholder="Insira o título do seu post"
            value={this.props.titulo}
            onChange={(e) => this.props.setTitulo(e.target.value)} // Atualiza o estado do título
          ></input>

          <textarea
            type="text"
            placeholder="Insira o conteúdo do seu post"
            value={this.props.conteudo}
            onChange={(e) => this.props.setConteudo(e.target.value)} // Atualiza o estado do conteúdo
          ></textarea>

          <input
            type="url"
            placeholder="Insira a imagem do seu post (Opcional)"
            value={this.props.imagem}
            onChange={(e) => this.props.setImagem(e.target.value)} // Atualiza o estado da imagem
          ></input>

          <button onClick={this.props.onClickNovoPost} className="botaoCriar">
            Criar Post
          </button>
        </div>
      </div>
    );
  }
}

export default ComponenteInputs;
