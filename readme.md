# Book API

API REST com CRUD sobre livros desenvolvida em Nodejs com mongoDB com base no conteúdo [Node.js: API Rest com Express e MongoDB](https://www.alura.com.br/curso-online-nodejs-api-rest-exp) da Alura.

## Tecnologias
* Nodejs
* MongoDB

## Dependências:
- Necessário ter o nodejs e mongoDB instalados.
- No terminal digitar o comando: ```npm i```

## Rotas
/books 
<br>
#### GET
/books - Todos os registros <br>
/books/:id - por id

#### POST
/books/ <br>
Estrutura do JSON a ser enviado
```{
    "title": "Coração de tinta",
    "editor": "Rocco",
    "author": "Cornelia Funke"
}
```
#### PUT
/books/:id
```{
    "title": "Coração de tinta",
    "editor": "Rocco",
    "author": "Cornelia Funke"
}
```
