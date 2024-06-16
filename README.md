<img src="https://cdn3.iconfinder.com/data/icons/type-file-working-office-online-set-the-surname-us/53/json-type-1024.png" alt="Ícone Json" width="200" height="200">
# Projeto CRUD com Arquivo JSON

Este é um projeto de exemplo que demonstra a implementação de um sistema CRUD (Create, Read, Update, Delete) usando arquivos JSON como armazenamento de dados. O objetivo é fornecer um exemplo simples e funcional de como realizar operações CRUD sem a necessidade de um banco de dados tradicional.

## Índice

- [Introdução](#introdução)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Introdução

Este projeto tem como objetivo fornecer um exemplo prático de como realizar operações CRUD utilizando arquivos JSON para armazenar dados. É ideal para aplicações pequenas ou protótipos onde não é necessário um banco de dados completo.

## Tecnologias Utilizadas

- Node.js
- Npm
- Express
- Nodemon
- Cors
- JSON

## Funcionalidades

- **Criar**: Adicionar novos registros ao arquivo JSON.
- **Ler**: Ler e exibir registros do arquivo JSON.
- **Atualizar**: Modificar registros existentes no arquivo JSON.
- **Deletar**: Remover registros do arquivo JSON.

## Instalação

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/en/download/package-manager)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Postman](https://www.postman.com/downloads/) 

### Passos

1. Clone este repositório para sua máquina local.
    ```sh
    git clone https://github.com/Robertmichaelavila/crud-com-arquivo-json.git
    ```

2. Navegue até o diretório do projeto.
    ```sh
    cd crud-com-arquivo-json
    ```

3. Instale as dependências necessárias, se caso for criar do zero!
    ```sh
    # express
    npm install --save express
    
    # nodemon
    npm install --save nodemon
    
    # cors
    npm install --save cors
    ```

## Como Usar

### Executar a Aplicação

1. Execute o script principal.
    ```sh
    npm start
    ```

2. Acesse a aplicação através do navegador no endereço:
    ```
    http://localhost:8800/home
    ```

### Exemplos de Uso

- **Criar**: Utilize a interface ou faça uma requisição POST para adicionar novos dados.
- **Ler**: Acesse a página inicial ou faça uma requisição GET para visualizar os dados.
- **Atualizar**: Utilize a interface ou faça uma requisição PUT para modificar dados existentes.
- **Deletar**: Utilize a interface ou faça uma requisição DELETE para remover dados.

## Contribuição

Se você deseja contribuir com este projeto, siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Faça push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
