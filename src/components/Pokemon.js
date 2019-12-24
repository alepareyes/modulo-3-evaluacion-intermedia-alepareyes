import React from 'react';
import '../stylesheet/pokecard.scss';

function Pokemon(props) {
  debugger
  let types = props.types;

  console.log(types);
  return (
    <li className="item">
      <span className="number">#{props.number}</span>
      <div className='pokemon'>
        <img className="img" src={props.image} alt={props.pokemon} />
        <h3 className="name border--name">{props.pokemon}</h3>
        <p className="type">
          {types.map((type) => {
            return (
              <li className="type__item">
                {`${type} `}
              </li>
            );
          })}
        </p>
      </div>
    </li >
  )
}

export default Pokemon;