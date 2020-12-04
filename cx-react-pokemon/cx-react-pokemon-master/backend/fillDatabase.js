const pokemons = require('./pokemons.json');

const knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host : '127.0.0.1',
    user : 'user',
    database : 'pokemons'
  }
})

knex.schema.createTableIfNotExists("pokemons", function (table) {
  table.increments(); // integer id
  table.string('numero');
  table.jsonb('details');
}).then(async  () => {
      const pokemonsToInsert = pokemons.map(pokemon => {
         return {
           numero: pokemon.numero,
           details: JSON.stringify(pokemon)
         }
      })


      //pokemonToInsert = [{ numero: "001", details: JSON }] 
      await knex("pokemons").insert(pokemonsToInsert);
  }
)