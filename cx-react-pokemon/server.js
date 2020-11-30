// const http = require('http');
const express = require('express')
const knex = require('knex')
const app = express()

const database = knex({
    client: 'pg',
    connection: {

        host : '127.0.01',
        user : 'root',
        password : '',
        database : 'pokemons'
    },
    searchPath: ['knex', 'public'],

});

app.get('/', (req, res) => {
    res.send('<h1> hello connexion api<h1>')
})

app.get('/pokemons', (req, res) => {
    res.write("Route pokemons")
    res.end()
})
 
app.get('/pokemons/:id', (req, res) => {
    const {id} = req.params
})

// const app = require('./app')

// app.set('port', process.env.PORT || 3000 );

// const server = http.createServer(app);

// server.listen(process.env.PORT || 3000);