import Pokedex from "./Pokedex";

import { DEFAULT_POKE } from "./Pokedex";

import { splitArray, shuffleArray, sumArrayOfNumbers } from './helper';
import './Pokegame.css';

const shuffledPokes = shuffleArray(DEFAULT_POKE);
const handsArray = splitArray(shuffledPokes); // [[],[]]
const player1 = handsArray[0];
const player2 = handsArray[1];
const totalExp = handsArray.map(array => (array).map(obj => obj.base_experience));
const totalExpPlayer1 = sumArrayOfNumbers(totalExp[0]);
const totalExpPlayer2 = sumArrayOfNumbers(totalExp[1]);

function Pokegame() {
  // Take that pokemons array and randomly passing those to


  return (
    <div className="Pokegame-container">
      <Pokedex pokemons={player1} experience={totalExpPlayer1} />
      <Pokedex pokemons={player2} experience={totalExpPlayer2} />
    </div>
  );
}



export default Pokegame;