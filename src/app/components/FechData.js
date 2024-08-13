"use client";
import React, { useState, useEffect }  from "react";

const FetchData = () => {
  const [pokemon, setPokemon] = useState(undefined);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/3/")
      .then((res) => res.json())
      .then((json) => setPokemon(json))
      .catch(() => alert("error"));
 
  }, []);
   
  console.log(pokemon);
  return <>
    {pokemon === undefined ? "" : <div>{pokemon["name"]}</div>}
    {pokemon === undefined ? "" : <img src={pokemon["sprites"]["front_default"]} />}
   </>;
};

export default FetchData;