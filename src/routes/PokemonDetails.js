import React, { useEffect, useState } from "react"
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom"

function PokemonDetails() {
 const [ pokemon, setPokemon ] = useState(null)
 const params = useParams();

 useEffect(() => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
   .then(res => res.json())
   .then(data => {
    setPokemon(data)
    console.log(data)
   })
 }, [])
 
 if(!pokemon){
  return <>
   loading...
  </>
 }
 
 return(
  <div>
  <Card border="secondary" style={{ width: '20rem' }}>
    <Card.Body className="text-center">
  <img src={pokemon?.sprites?.front_default} />
  <img src={pokemon?.sprites?.back_default} />
  <img src={pokemon?.sprites?.front_shiny} />
  <img src={pokemon?.sprites?.back_shiny} />
      <Card.Header as="h2">{pokemon.name}</Card.Header>
      <br></br>
      <Card.Text><h5>Height: {pokemon.height}</h5>
    <h5>Weight: {pokemon.weight}</h5>
    <h5>Abilities:</h5> 
      {pokemon?.abilities?.map((power) => (
        <ul>
          <p> • {power.ability.name}</p>
        </ul>
      ))}
    </Card.Text>
    </Card.Body>
  </Card>  
  </div>
  )
}

export { PokemonDetails }