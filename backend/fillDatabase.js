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

async function main() {
  knex.schema.createTableIfNotExists("payment_paypal_status", function (table) {
  table.increments(); // integer id
  // name
  table.string('name');
  //description
  table.string('description');
}).then(function () {
      return knex("payment_paypal_status").insert([
          {name: "A", description: "A"},
          {name: "B", description: "BB"},
          {name: "C", description: "CCC"},
          {name: "D", description: "DDDD"}
      ]);
  }
)
}

main()