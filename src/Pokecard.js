function Pokecard ({name, image, type, base_experience}) {
  return (
    <div>
      <h4>{name}</h4>
      <img src={image} alt="pokemon"/>
      {type}
      {base_experience}
    </div>
  )
}

export default Pokecard;