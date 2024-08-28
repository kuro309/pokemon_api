"use client";
import React, { useState, useEffect }  from "react";

const FetchData = () => {
  const [pokemon, setPokemon] = useState(undefined);
  const [pokemon_zukan, setPokemonZukan] = useState(undefined);
  let index = 0;
  let id = 151;

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => res.json())
      .then((json) => setPokemon(json))
      .catch(() => alert("error"));
 
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
      .then((res) => res.json())
      .then((json) => {
        setPokemonZukan(json)
        index = json["names"].findIndex((item) => item.language.name === "ja-Hrkt");
      })
      .catch(() => alert("error"));
      
  }, []);
  // console.log(pokemon_zukan); 
  // console.log(index);
  // console.log(pokemon_zukan["names"][index]["name"]);
  return <>
    {pokemon_zukan === undefined ? "" : <div>{pokemon_zukan["names"][index]["name"]}</div>}
    {pokemon === undefined ? "" : <img src={pokemon["sprites"]["front_default"]} />}
   </>;
};

export default FetchData;