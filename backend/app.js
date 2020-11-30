const express = require('express')

const app = express();
let pokemons = require('./pokemons.json')

app.get('/pokemons',(req /* Requete du client */ , res /* Reponse du serveur */) => {
   res.send(pokemons);
})

app.get('/pokemons/:id', (req, res) => {
   const id = req.params.id;

   let pokemon = null;

   pokemons.forEach(p => {
           if ( p.numero === id ){
               pokemon = p;
           }
   })
   res.send(pokemon);
})

app.delete('/pokemons/:id', (req, res) => {
    const id = req.params.id;
    
    console.log('id', id);
    pokemons = pokemons.filter(p => {
            if ( p.numero !== id ){
                    return true
            }
            console.log('Id is same');
            return false;
    })

    res.send({ status: "ok" });
})

// app.post('/pokemon',(req, res) => {
//    // Créer des données sur le serveur -> BDD
// })

// app.update('/pokemon',(req, res) => {
//    // Modifie un pokémon
// })

// app.delete('/pokemon',(req, res) => {
//     // Supprime le pokémon
//  })

app.listen(4000, () => console.log('Server is listening to port 3000'))

module.exports = app;