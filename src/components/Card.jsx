import React from 'react';
import '../styles/Card.css';
export default function Card(props) {
  return (
    <div
      className='card-container'
      onClick={props.shuffleChampions}
      id={props.id}
    >
      <img src={props.image} />
      <h2>{props.name}</h2>
    </div>
  );
}
