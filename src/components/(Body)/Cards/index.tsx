import { useState, useEffect } from "react";


type resultProps = {
  abilities: object,
base_experience: number,
  cries: object,
  forms: any[],
  game_indices: any[],
  height: number,
held_items: any[],
id: number,
is_default: boolean,
location_area_encounters: string,
  moves: any[],
  name: string,
order: number,
past_abilities: any[],
past_types: any[],
species: object,
  sprites: object,
  stats: any[],
types: any[],
weight:number,
  };

const Card = (prop: any) => {

  const [result, setResult] = useState<resultProps[]>([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${prop.name}`, {
        method: "GET"
      });
      const jsonData = await data.json();
      setResult(jsonData);
    };

    api();
  }, []);
  console.log(result);

  return (
    <>
      <h2>card</h2>
      {prop.name}
    </>
  );
}

export default Card;