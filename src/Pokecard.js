import './Pokecard.css';

function Pokecard({ name, image, type, base_experience }) {
  return (
    <div className='Pokecard-card'>
      <h4 className='Pokecard-name'>{name}</h4>
      <img className='Pokecard-img' src={image} alt="pokemon" />
      <div className='Pokecard-sub'>
        <p>Type:  {type}</p>
        <p> EXP:  {base_experience}</p>

      </div>

    </div>
  );
}

export default Pokecard;