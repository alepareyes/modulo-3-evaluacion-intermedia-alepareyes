import React from 'react';
import PokeList from './PokeList';
import Pokemon from './Pokemon';
import infoPokemons from '../api/pokemons';
import '../stylesheet/body.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: infoPokemons
    };
  }

  render() {
    return (
      <div class="content">
        <img className="title" src="pokelogo.png" alt="Pokédex" />
        <ul className="list">
          <PokeList>
            {this.state.pokemons.map((pokemon) => {
              return <Pokemon
                key={pokemon.id}
                number={pokemon.id}
                pokemon={pokemon.name}
                types={pokemon.types}
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
