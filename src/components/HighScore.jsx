import React from 'react';
import '../styles/HighScore.css';

export default function HighScore(props) {
  return (
    <div className='high-score'>
      <h3>High Score: </h3>
      <h3>{props.highScore}</h3>
    </div>
  );
}
