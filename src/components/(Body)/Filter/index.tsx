import axios from "axios";
import { useEffect, useState } from "react";

interface cardProps {
  onCardClick: any;
}

const Filter = (props: cardProps) => {
  const [colorsList, setColorsList] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon-color/")
      .then((response) => setColorsList(response.data.results));
  }, []);

  const [eggsList, setEggList] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/egg-group/")
      .then((response) => setEggList(response.data.results));
  }, []);

  const [habitatList, setHabitatList] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon-habitat/")
      .then((response) => setHabitatList(response.data.results));
  }, []);

  const [shapeList, setShapeList] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon-shape/")
      .then((response) => setShapeList(response.data.results));
  }, []);

  return (
    <>
      Colors:
      {colorsList.map((color) => (
        <button
          key={color.name}
          style={{ background: color.name }}
          onClick={() => props.onCardClick(color.url)}
        >
          {color.name}
        </button>
      ))}
      <br />
      Eggs:
      {eggsList.map((eggs) => (
        <button onClick={() => props.onCardClick(eggs.url)} key={eggs.name}>
          {eggs.name}
        </button>
      ))}
      <br />
      Habitat:
      {habitatList.map((habitat) => (
        <button onClick={() => props.onCardClick(habitat.url)} key={habitat.name}>
          {habitat.name}
        </button>
      ))}
      <br />
      Shape:
      {shapeList.map((shape) => (
        <button onClick={() => props.onCardClick(shape.url)} key={shape.name}>
          {shape.name}
        </button>
      ))}
    </>
  );
};

export default Filter;
