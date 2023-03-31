# Documentação Mercado Pago | EJCM

Esse repositório contém um exemplo de implementação de certas funcionalidades do mercado pago em uma aplicação utilizando node.js.
 
**Status do Projeto** : Em progresso

![Badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Badge](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Badge](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Badge](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Badge](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Badge](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
![Badge](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)
 
## Tabela de Conteúdo

 1. [Tecnologias utilizadas](#tecnologias-utilizadas)
 2. [Instalação](#instalação)
 3. [Configuração](#configuração)
 4. [Uso](#uso)
 5. [Arquitetura](#arquitetura)
 6. [Autores](#autores)
 
## Tecnologias utilizadas

Essas são as frameworks e ferramentas que você precisará instalar para desenvolver esse projeto:

 - Express
 - Sequelize
 - React JS

Outras tecnologias interessantes que foram implementadas:

 - Node.js
 - Npm
 - Yarn

## Instalação 

``` bash
$ git clone https://github.com/HenriChris/mercado-pago.git
```

Front:

``` bash
$ cp front
```

``` bash
$ npm install
```

Back:

``` bash
$ cp back
```

``` bash
$ npm install
```

## Configuração

No terminal da pasta do back:

``` bash
$ cp .env.example .env
```
``` bash
$ npm run migrate
```
``` bash
$ npm run keys
```
``` bash
$ npm run dev
```
 
## Uso

No terminal da pasta do front:
``` bash
$ npm start
```

No terminal da pasta do back:
``` bash
$ npm run dev
```

## Arquitetura

- [Figma](https://www.figma.com/file/sTrMjuHBvhxQ4ylIVKEIEX/squad-3?node-id=0%3A1&t=JJOubrjvTGPHBO9U-1)
- ![Modelagem do banco de dados](modelagem.jpg?raw=true "Modelagem")

## Autores

- Henrique Chrispim
- Lucas Pinheiro 

## Última atualização: 31/03/2023
