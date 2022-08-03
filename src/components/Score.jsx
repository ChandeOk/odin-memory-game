import React from 'react';
import '../styles/Score.css';
export default function Score(props) {
  return (
    <div className='score'>
      <h3>Score: </h3>
      <h3>{props.score}</h3>
    </div>
  );
}
