import styled from 'styled-components';

export const Cabecalho = styled.div`
    text-align: center;

`

export const CabImg = styled.img`
    width: 90vw;
    height: 15vw;
    max-height: 200px;
    border-radius: 10px;
`

export const InputsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;


`
export const Input = styled.input`
    margin: 0.5vw;
    padding: 0.5vw;
    width: 90vw;
    border: 2px solid rgb(169,169,169);
    border-radius: 10px;
    background: transparent;

`

export const TextArea = styled.textarea`
    margin: 0.5vw;
    padding: 0.5vw;
    width: 90vw;
    border: 2px solid rgb(169,169,169);
    border-radius: 10px;
    background: transparent;
`

export const BotaoCriar = styled.button`
    padding: 1.5vw;
    border-radius: 17px 5px;
    background-color: #f5ec42;
    font-weight: bolder;
    font-size: 15px;
    border: 2px solid black;
    color: black;

`

export const ComponentePostsDiv = styled.div`
      

`

export const Post = styled.div`
    border-radius: 12px;
    margin: 0px 3.5%;
    margin-bottom: 2%; /* Espaçamento entre os posts */
    margin-top: 1%; /* Espaçamento entre os posts */
    display: flex; /* Para permitir a disposição da imagem à direita */
    justify-content: space-between; /* Para espaçar o conteúdo e a imagem */
    text-align: left;
`

export const PostImg = styled.img`
    min-width: 40%; /* Ajuste o tamanho máximo da imagem */
    min-height: 40%; /* Limita a altura máxima da imagem */

`

export const PostTitulo = styled.h2`
    /* background-color: rgba(220,220,220, 0.5); */
    background: none;
    margin: 1% 10% 0 10%;

`

export const PostTexto = styled.p`
background: none;
word-wrap: break-word;
margin-left: 1%;
`

export const TituloConteudo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-image: 
    linear-gradient(rgba(176,196,222, 0.5), rgba(220,220,220, 0.5)), /* Gradiente sobreposto */
    url('https://media.istockphoto.com/id/1440656058/vector/white-clear-blank-subtle-abstract-vector-geometrical-background-monotone-light-empty-concave.jpg?s=612x612&w=0&k=20&c=iVvBaWgX4z0Wu8ubrdeV4Ns7vGhgGlMCrmhgCMYxAIk='); /* Imagem de fundo */
    background-size: cover; /* Cobre toda a área do elemento */
    background-position: center; /* Centraliza a imagem */
    background-repeat: no-repeat;       
    word-wrap: break-word;
`

export const Popup = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`

export const PopupTexto = styled.div`
    padding: 20px;
    border-radius: 8px;
    max-width: 40%; /* Limita a largura máxima */
    max-height: 80%; /* Limita a altura máxima */
    width: 100%;
    overflow-y: auto; /* Adiciona barra de rolagem se o conteúdo for maior que a altura */
    overflow-x: hidden;
    text-align: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Sombra para dar destaque ao popup */
    word-wrap: break-word;
`

export const BotaoFechar = styled.button`
    color: white;
    background-color: red;
    width: 5%;
    height: 3%;
    border: none;
    border-radius: 5px;
    font-weight: bolder;
    margin-left: 1%;

    &:hover{
        background-color: brown;
        cursor: pointer;
    }
`

export const BotaoDeletar = styled.button`
    padding: 0.5vw;
    border-radius: 17px 5px;
    background-color: red;
    color: white;
    font-weight: bold;
    margin-left: 1%;

`

export const BotaoDiv = styled.div`
    background: none;
    border: none;
`

export const BotaoLerMais = styled.button`
        padding: 0.5vw;
        border-radius: 17px 5px;
        margin-bottom: 1%;
        margin-left: 1%;
`