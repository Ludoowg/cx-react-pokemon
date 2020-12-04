import fetch from 'node-fetch';

const API_URL = 'http://localhost:4000';

export async function getPokemons()
{
    const response = await fetch(API_URL + '/pokemons', {
        method: 'get',
    })

    return response.json();
}

export async function deletePokemon(pokemonNumber)
{
    const response = await fetch(API_URL + `/pokemons/${pokemonNumber}`, {
        method: 'delete',
    })

    return response;
}