import React from 'react';
import Pokemon from './Pokemon';

function PokeList(props) {
  console.log(props.pokemons)

  return (
    <div>
      <ul className="poke-list">
        {props.children}
        <Pokemon />
      </ul>
    </div>
  )
}

export default PokeList;