import { useState } from 'react';
import './styles/App.css';
import Card from './components/Card';
import HighScore from './components/HighScore';
import Score from './components/Score';
import getChampionData from './utils/util';
import _ from 'lodash';

function App() {
  const [state, setState] = useState({
    score: 0,
    highScore: 0,
    champions: [
      getChampionData('Aatrox'),
      getChampionData('Ahri'),
      getChampionData('Ezreal'),
      getChampionData('Qiyana'),
      getChampionData('Jinx'),
      getChampionData('Sett'),
    ],
  });
  const [clickedCards, setClickedCards] = useState([]);
  console.log(state, clickedCards);

  const shuffleChampions = () => {
    setState((prevState) => ({
      ...prevState,
      champions: _.shuffle(prevState.champions),
    }));

    // console.log(e.target.closest('.card-container').id);
  };

  const checkCard = (e) => {
    const clickedCardId = e.target.closest('.card-container').id;
    if (!clickedCards.includes(clickedCardId)) {
      setState((prevState) => ({ ...prevState, score: prevState.score + 1 }));
      setClickedCards((prevCards) => [...prevCards, clickedCardId]);
    } else {
      state.score > state.highScore &&
        setState((prevState) => ({ ...prevState, highScore: state.score }));
      setClickedCards([]);
      setState((prevState) => ({ ...prevState, score: 0 }));
    }

    shuffleChampions();
  };

  const cardsElements = state.champions.map((champ) => (
    <Card
      image={champ.url}
      name={champ.name}
      key={champ.id}
      id={champ.id}
      shuffleChampions={checkCard}
    />
  ));

  return (
    <div className='App'>
      <div className='cards-container'>{cardsElements}</div>
      <div className='score-container'>
        <Score score={state.score} />
        <HighScore highScore={state.highScore} />
      </div>
      <h3>
        Get points by clicking on an image but don't click one any more than
        once!
      </h3>
    </div>
  );
}

export default App;
