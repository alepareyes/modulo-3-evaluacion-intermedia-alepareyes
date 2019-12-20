import React from 'react';
import '../stylesheet/pokecard.scss';

function Pokemon(props) {
  debugger
  let types = props.types;

  console.log(types);
  return (
    <li className='pokemon border--medium'>
      <img className="img" src={props.image} />
      <h3 className="name border--name">{props.pokemon}</h3>
      <p className="type">
        {types.map((type) => {
          return (
            <li>
              {type}
            </li>
          );
        })}
      </p>
    </li>
  )
}

export default Pokemon;