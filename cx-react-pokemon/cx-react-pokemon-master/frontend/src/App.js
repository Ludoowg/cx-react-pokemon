import logo from './logo.svg';
import './App.css';
import React from 'react';
import { getPokemons, deletePokemon } from './API';


function getPokemonImageURL(pokemonNumber) {
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonNumber}.png`
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: null,
      show: 'allPokemons',
      pokemonNumber: null,
    }
  }

  componentDidMount() {
    this.loadPokemons();
  }

  async loadPokemons() {
    try {
      const pokemonsFromAPI = await getPokemons();
      this.setState({ pokemons: pokemonsFromAPI })
    } catch (error) {
      console.error(error);
    }
  }

  renderPokemons() {
    const { pokemons } = this.state;
    if (pokemons === null) {
      return <p>Loading...</p>
    } else {
      return pokemons.map((pokemon, index) => {

        return (
          <div className="renderPokemons">
          <div key={index}>
            <img src={getPokemonImageURL(pokemon.numero)}></img>
            <p>#{pokemon.numero} {pokemon.nom}</p>
            <button class ="buttonshow" onClick={() => this.setState({ show: 'pokemonDetails', pokemon: pokemon })}>Show details</button>
          </div>
          </div>
        )
      })
    }
  }


  async deletePokemon(pokemonNumber) {
    try {
      await deletePokemon(pokemonNumber);
      await this.loadPokemons();
      console.log('here');
      this.setState({ show: 'allPokemons' });
    } catch (error) {
      console.error(error)
    }
  }

  renderPokemonDetails() {
    const { pokemon } = this.state;

    return (
      <div className="pokemon-details">
        <img src={getPokemonImageURL(pokemon.numero)}></img>
        <p>Voici les détails du pokemon {pokemon.numero}</p>
        <p>Nom: {pokemon.nom}</p>
        <p>Nom anglais: {pokemon.nomen}</p>
        <p>Nom japonais: {pokemon.nomja}</p>
        <p>Espece: {pokemon.espece}</p>
        <p>Taille: {pokemon.taille} mètres</p>
        <p>Poids: {pokemon.poids} kg </p>
        <p>Type: {pokemon.type1}</p>
        <button class="buttondelete" onClick={() => this.deletePokemon(pokemon.numero)}>Supprimer le pokémon</button>
        <button class="buttonpokedex" onClick={() => this.setState({ show: 'allPokemons' })}>Retourner au pokédex</button>
      </div>
    )
  }

  render() {
    const { show } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src="https://cdn.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png" className="App-logo" alt="logo" />
          {
            show === 'allPokemons' ? this.renderPokemons() : this.renderPokemonDetails()
          }
        </header>
      </div>
    );
  }
}

export default App;
