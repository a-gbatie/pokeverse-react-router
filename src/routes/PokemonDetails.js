import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function PokemonDetails() {
 const [ pokemon, setPokemon ] = useState(null)
 const params = useParams();

 useEffect(() => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
   .then(res => res.json())
   .then(data => {
    setPokemon(data)
   })
 }, [])
 
 if(!pokemon){
  return <>
   loading...
  </>
 }
 
 return(
  <div>
   {/* TRYING TO RENDER THE IMG HERE, NOT WORKING */}
   {pokemon?.sprites.map((img) => {
    {img.front_default}
   })}
    <h3>{pokemon.name}</h3>
    <p>height: {pokemon.height}</p>
    <p>weight: {pokemon.weight}</p>
    <h5>Abilities:</h5> 
    <ul>
     {pokemon?.abilities?.map((power) => {
      <li>
       {/* NOT SEEING ANYTHING BEING RENDERED HERE. TRIED TO ACCESS THE ABILIITIES WITH {power.abilitity.name} */}
       <p>hello</p>
      </li>
     })}
    </ul>
  </div>
 )
}

export { PokemonDetails }