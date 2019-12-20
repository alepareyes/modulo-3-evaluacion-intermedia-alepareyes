import React from 'react';
import PokeList from './PokeList';
import Pokemon from './Pokemon';
import infoPokemons from '../api/pokemons';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: infoPokemons
    };
  }

  render() {
    return (
      <div>
        P O K E D É X :
        <ul>
          <PokeList>
            {this.state.pokemons.map((pokemon) => {
              return <Pokemon
                key={pokemon.id}
                pokemon={pokemon.name}
                types={pokemon.type}
                image={pokemon.url}
              />
            })}
          </PokeList>
        </ul>
      </div>
    );
  }
}

export default App;
