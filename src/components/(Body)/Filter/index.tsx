import axios from "axios";
import { useEffect, useState } from "react";

const Filter = () => {
  const [colorsList, setColorsList] = useState<any[]>([]);
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon-color/')
      .then(response => setColorsList(response.data.results))
  }, []);

  const [eggsList, setEggList] = useState<any[]>([]);
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/egg-group/')
      .then(response => setEggList(response.data.results))
  }, []);

  const [habitatList, setHabitatList] = useState<any[]>([]);
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon-habitat/')
      .then(response => setHabitatList(response.data.results))
  }, []);

  const [shapeList, setShapeList] = useState<any[]>([]);
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon-shape/')
      .then(response => setShapeList(response.data.results))
  }, []);

  const [typeList, setTypeList] = useState<any[]>([]);
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/type/')
      .then(response => setTypeList(response.data.results))
  }, []);

  return (<>
    {colorsList.map(color => <span key={color.name}> {color.name} </span>)}
    <br/>
    {eggsList.map(eggs => <span key={eggs.name}> {eggs.name} </span>)}
    <br/>
    {habitatList.map(habitat => <span key={habitat.name}> {habitat.name} </span>)}
    <br/>
    {shapeList.map(shape => <span key={shape.name}> {shape.name} </span>)}
    <br/>
    {typeList.map(type => <span key={type.name}> {type.name} </span>)}
  </>)
}

export default Filter;