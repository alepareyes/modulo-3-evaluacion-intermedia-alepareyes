import React from 'react';
import PokeList from './PokeList';
import Pokemon from './Pokemon';
import infoPokemons from '../api/pokemons';
import '../stylesheet/pokecard.scss';

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
        <h1 className="title">P O K É D E X :</h1>
        <ul className="list">
          <PokeList>
            {this.state.pokemons.map((pokemon) => {
              return <Pokemon
                key={pokemon.id}
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
