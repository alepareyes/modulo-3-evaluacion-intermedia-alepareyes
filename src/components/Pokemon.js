import React from 'react';
import '../stylesheet/pokecard.scss';
import '../stylesheet/types.scss'

function Pokemon(props) {
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

            if (type === 'bug') {
              return (
                <li className="type__item type__bug" >
                  {`${type} `}
                </li>
              );


            } else if (type === 'dark') {
              return (
                <li className="type__item type__dark" >
                  {`${type} `}
                </li>
              );


            } else if (type === 'dragon') {
              return (
                <li className="type__item type__dragon" >
                  {`${type} `}
                </li>
              );

            } else if (type === 'electric') {
              return (
                <li className="type__item type__electric" >
                  {`${type} `}
                </li>
              );

            } else if (type === 'fairy') {
              return (
                <li className="type__item type__fairy" >
                  {`${type} `}
                </li>
              );

            } else if (type === 'fighting') {
              return (
                <li className="type__item type__fighting" >
                  {`${type} `}
                </li>
              );



            } else if (type === 'fire') {
              return (
                <li className="type__item type__fire" >
                  {`${type} `}
                </li>
              );


            } else if (type === 'flying') {
              return (
                <li className="type__item type__flying" >
                  {`${type} `}
                </li>
              );

            } else if (type === 'ghost') {
              return (
                <li className="type__item type__ghost" >
                  {`${type} `}
                </li>
              );


            } else if (type === 'grass') {
              return (
                <li className="type__item type__grass" >
                  {`${type} `}
                </li>
              );


            } else if (type === 'ground') {
              return (
                <li className="type__item type__ground" >
                  {`${type} `}
                </li>
              );


            } else if (type === 'ice') {
              return (
                <li className="type__item type__ice" >
                  {`${type} `}
                </li>
              );

            } else if (type === 'normal') {
              return (
                <li className="type__item type__normal" >
                  {`${type} `}
                </li>
              );

            } else if (type === 'poison') {
              return (
                <li className="type__item type__poison" >
                  {`${type} `}
                </li>
              );


            } else if (type === 'psychic') {
              return (
                <li className="type__item type__psychic" >
                  {`${type} `}
                </li>
              );


            } else if (type === 'rock') {
              return (
                <li className="type__item type__rock" >
                  {`${type} `}
                </li>
              );


            } else if (type === 'steel') {
              return (
                <li className="type__item type__steel" >
                  {`${type} `}
                </li>
              );


            } else if (type === 'water') {
              return (
                <li className="type__item type__water" >
                  {`${type} `}
                </li>
              );
            }

          })}
        </p>
      </div>
    </li >
  )
}

export default Pokemon;