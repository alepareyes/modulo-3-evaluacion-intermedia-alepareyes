import React from 'react';

function PokeList(props) {
  console.log(props.pokemons)

  return (
    <div>
      <ul className="poke-list">
        {props.children}
      </ul>
    </div>
  )
}

export default PokeList;