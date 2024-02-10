import { useState, useEffect } from "react";
import Card from "../Cards";

type resultProps = {
  name: string;
  url: string;
};

const ListaContainer = () => {
  const [result, setResult] = useState<resultProps[]>([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=3", {
        method: "GET"
      });
      const jsonData = await data.json();
      setResult(jsonData.results);
    };

    api();
  }, []);

  return (
    <>
      <h2>listacontainer</h2>
      {result.map((value) => {
        return (
          <Card key={value.name} name={value.name} url={value.url} />
        );
      })}
    </>
  );
}

export default ListaContainer;