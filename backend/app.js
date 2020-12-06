const express = require('express')
const cors = require('cors');

const knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host : '127.0.0.1',
    user : 'user',
    database : 'pokemons'
  }
})

const app = express();
app.use(cors());
app.get('/pokemons', async (req /* Requete du client */ , res /* Reponse du serveur */) => {
   const pokemonsFromDB /* Not formated */ = await knex.select('*').from('pokemons');
   const pokemonToSend /* formated */ = pokemonsFromDB.map(pokemon => {
       return JSON.parse(pokemon.details)
   })
   res.send(pokemonToSend); /* On envoie les pokemons bien formattés dans la réponse */ 
})

app.get('/pokemons/:id', async (req, res) => {
   const id = req.params.id;

   const pokemonsFromDB = await knex('pokemons')
   .where({
        numero: id
      })
   .select('*')

   if (pokemonsFromDB.length === 0) {
      res.status(404).send({ Error: "Pokemon not found" });
      return;
   }

   const pokemonToSend = JSON.parse(pokemonsFromDB[0].details);
   res.send(pokemonToSend);
})

app.delete('/pokemons/:id', async (req, res) => {
    const id = req.params.id;

    console.log('IN DELETE POKEMON id: ', id);
    const deleted = await knex('pokemons')
      .where('numero', id)
      .del()

    if (deleted === 1)
    {
        res.send({ status: "ok"});

    } else {
        res.status(404).send({ Error: "pokemon doesn't exists"});
    }
})


app.listen(4000, () => console.log('Server is listening to port 4000'))

module.exports = app;

