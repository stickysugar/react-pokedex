import Pokecard from "./Pokecard";

function Pokedex ({ pokemons }) {
  return (
    <ul>

    {pokemons.map(p =>
    <li> <Pokecard
      name={p.name}
      image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
      type={p.type}
      base_experience={p.base_experience}
      /> </li>)}

    </ul>
  )
}

export default Pokedex;