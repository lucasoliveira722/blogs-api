# [🇧🇷 Português]
Este projeto consiste em uma API e banco de dados da produção de conteúdo para um blog.

## 🧰 Construído com:

- `NodeJS`;
- `Sequelize`;
- `Docker`;

# Como executar e testar a aplicação: 👨‍💻

* Clonar esse repositório, digitando `git clone git@github.com:git@github.com:lucasoliveira722/blogs-api.git` no terminal em sua máquina;
* Caso vá executar a aplicação utilizando Docker, rode o seguinte comando: `docker-compose up -d` na raiz da aplicação. Após isso, execute `docker attach blogs_api` e, dentro do bash do Docker, rode: `npm start`;
* Caso vá executar a aplicação sem o Docker, rode o seguinte comando: `npm i` na raiz da aplicação e, após isso, rode `npm start`;

# Endpoints:

### POST `/login`
- As informações de login devem estar cadastradas no banco de dados;
- A requisição deve ter o formato abaixo:
  ```json
  {
    "email": "lewishamilton@gmail.com",
    "password": "123456"
  }
  ```

### POST `/user`
- Adiciona um novo usuário ao banco;
- A requisição deve ter o formato abaixo:
  ```json
    {
        "displayName": "Brett Wiltshire",
        "email": "brett@email.com",
        "password": "123456",
        "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
    }
  ```

### GET `/user`
- Retorna todos os usuários presentes no banco;

### GET `/user/:id`
- Retorna o usuário que corresponda ao id passado via parâmetro;

### POST `/categories`
- Adiciona uma nova categoria ao banco;
- A requisição deve ter o formato abaixo:
```json
    {
        "name": "Typescript"
    }
```

### GET `/categories`
- Retorna todas as categorias presentes no banco

### GET `/post`
- Retorna todos os posts no banco, junto do usuário que criou e sua categoria

# [🇺🇸 English]

This project consists on an API and database about the production of contents for a blog.

## 🧰 Stack:

- `NodeJS`;
- `Sequelize`;
- `Docker`;

# How to run and test the application 👨‍💻

* Clone this repository, by tiping `git clone git@github.com:git@github.com:lucasoliveira722/blogs-api.git` in the terminal;
* In case you utilize Docker, type `docker-compose up -d` on the terminal on the source folder of the application, followed by `docker attach blogs_api` and `npm start`;
* In case you don't utilize Docker, type `npm i` on the terminal on the source folder of the application, followed by `npm start`;

# Endpoints:

### POST `/login`
- Email and password must be already registered on the db;
- The request must have the following format:
  ```json
  {
    "email": "lewishamilton@gmail.com",
    "password": "123456"
  }
  ```

### POST `/user`
- Adds a new user to the db;
- The request must have the following format:
  ```json
    {
        "displayName": "Brett Wiltshire",
        "email": "brett@email.com",
        "password": "123456",
        "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
    }
  ```

### GET `/user`
- Brings all the registered users on the db;

### GET `/user/:id`
- Brings the user which id matches the one given via parameters;

### POST `/categories`
- Adds a new category to the db;
- The request must have the following format:
```json
    {
        "name": "Typescript"
    }
```

### GET `/categories`
- Brings all categories registered at the db;

### GET `/post`
- Brings all posts registered at the db, along with its creator user and category;