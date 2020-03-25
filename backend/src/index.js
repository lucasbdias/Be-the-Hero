const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/* 
    Métodos HTTP {
        GET: Buscar/listar uma informação do backend;
        POST: Criar uma informação no backend;
        PUT: Alterar uma informação no Backend;
        DELETE: Deletar uma informação no Backend.
    }
*/

/*
    Tipos de parâmetros {
        Query: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação);
        Route Params: Parâmetros utilizados para identificar recursos
        Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
    }
*/

/*
    SQL: MySQL, SQLite, PostegreSQL, Oracle, Microsoft SQL Server.
    NoSQL: MongoDB, CouchDB, etc.
*/

/*
    Driver: SELECT *FROM users
    Query Builder: table('users').select('*').where()
*/