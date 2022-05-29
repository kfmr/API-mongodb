# Book API

API REST com CRUD sobre livros desenvolvida em Nodejs com mongoDB com base no conteúdo [Node.js: API Rest com Express e MongoDB](https://www.alura.com.br/curso-online-nodejs-api-rest-exp) da Alura.

## Tecnologias
* Nodejs
* MongoDB

## Dependências:
- Necessário ter o nodejs e mongoDB instalados.
- No terminal digitar o comando: ```npm i```

## Service
/books <br>
Para cadastrar um livro é necessário haver um autor cadastrado para inserir no payload de envio do registro. 
<br>
#### GET
/books - Todos os registros <br>
/books/:id - por id<br>
/books/genre?genre=fantasy
<br>
Exemplo de response:
```
[
  {
    "_id": "628fe11ff0cfb14c733dbaa8",
    "title": "Alice in Wonderland",
    "editor": "Darkside",
    "genre": "Fantasy",
    "__v": 0
  },
  {
    "_id": "6293cc92535466b50c298bac",
    "title": "Coração de tinta",
    "author": "6293cc6a535466b50c298ba8",
    "editor": "Jovem",
    "__v": 0,
    "genre": "Fantasy"
  }
]
```
#### POST
### route /books/ <br>
Estrutura do JSON a ser enviado
```
{
    "title": "Coração de tinta",
    "editor": "Rocco",
    "author": "{{authorId}}"
}
```
#### PUT
/books/:id
```
{
    "title": "Coração de tinta",
    "editor": "Rocco",
    "author": "{{authorId}}"
}
```
#### DELETE
/books/:id
<br>

### route /authors

#### GET
/authors - Todos os registros <br>
/authors/:id - por id<br>

<br>
Exemplo de response: <br>
```
[
  {
    "_id": "6293cc6a535466b50c298ba8",
    "author_name": "Cornelia Funke",
    "nacionality": "USA",
    "__v": 0
  }
]
```

#### POST
### route /books/ <br>
Estrutura do JSON a ser enviado
```
[
  {
    "author_name": "Cornelia Funke",
    "nacionality": "USA",
  }
]
```
#### PUT
/authors/:id
```
[
  {
    "author_name": "Cornelia Funke",
    "nacionality": "USA",
  }
]
```
#### DELETE
/authors/:id
