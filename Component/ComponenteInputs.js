import React, { Component } from "react";
import { InputsDiv, Input, TextArea, BotaoCriar } from "./../StyledComponents";

class ComponenteInputs extends Component {
  state = {};

  render() {
    return (
      <div>
        {/* <GlobalStyle /> */}
        <InputsDiv>
          <Input
            type="text"
            placeholder="Insira o título do seu post"
            value={this.props.titulo}
            onChange={(e) => this.props.setTitulo(e.target.value)} // Atualiza o estado do título
            maxlength="50"
          ></Input>

          <TextArea
            type="text"
            placeholder="Insira o conteúdo do seu post"
            value={this.props.conteudo}
            onChange={(e) => this.props.setConteudo(e.target.value)} // Atualiza o estado do conteúdo
          ></TextArea>

          <Input
            type="url"
            placeholder="Insira a imagem do seu post (Opcional)"
            value={this.props.imagem}
            onChange={(e) => this.props.setImagem(e.target.value)} // Atualiza o estado da imagem
          ></Input>

          <BotaoCriar type="submit" onClick={this.props.onClickNovoPost}>
            Criar Post
          </BotaoCriar>
        </InputsDiv>
        
      </div>
    );
  }
}

export default ComponenteInputs;