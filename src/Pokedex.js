import Pokecard from "./Pokecard";
import './Pokedex.css';
const DEFAULT_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const DEFAULT_POKE =
  [
    { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
    { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
    { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
    { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
    { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
    { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
    { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
    { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
  ];
function Pokedex({ pokemons = DEFAULT_POKE, experience }) {
  return (
    <div>  <ul className="Pokedex-container">

      {pokemons.map(p =>
        <li> <Pokecard
          name={p.name}
          image={`${DEFAULT_URL}${p.id}.png`}
          type={p.type}
          base_experience={p.base_experience}
        /> </li>)}

    </ul>
      <h2>{experience}</h2>
    </div>

  );
}

export default Pokedex;
export { DEFAULT_POKE };