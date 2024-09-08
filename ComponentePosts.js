import React, { Component } from 'react';
// import { Container, Title, Button, gaynome } from './styles';

class ComponentePosts extends Component {
  state = {
    postItens: [
      { titulo: "Kallebe", conteudo: "nada" },
      { titulo: "Felipe", conteudo: "nada também" },
      { titulo: "Samuel", conteudo: "necas" },
    ],
    titulo: "",
    conteudo: "",
  };
  render() {
    let lista = this.state.postItens.map((gays) => {
      return (
        <div>
          <nome>{gays.titulo}</nome><espaco> </espaco>
          <sobrenome>{gays.conteudo}</sobrenome><br></br>
        </div>
      );
    });

    return (
      <div>{lista}</div>
    )
  }
}


export default ComponentePosts;
