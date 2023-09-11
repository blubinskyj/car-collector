import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/card/Card.jsx";
import Form from "./components/form/Form.jsx";

function App() {
  const [data, setData] = useState();
  const [search, setSearch] = useState();
  useEffect(() => {
    fetch("/")
      .then((res) => res.json())
      .then((data) => setData());
  }, []);

  return (
    <>
      <Form />

      {/*<Card*/}
      {/*  link={"https://auto.ria.com/uk/auto_volkswagen_tiguan_35177119.html"}*/}
      {/*  site={"autoria"}*/}
      {/*  city={"lviv"}*/}
      {/*  image={*/}
      {/*    "https://cdn1.riastatic.com/photosnew/auto/photo/volkswagen_tiguan__513741891bx.jpg"*/}
      {/*  }*/}
      {/*  year={"2001"}*/}
      {/*  title={"lanos"}*/}
      {/*  volume={"1.5"}*/}
      {/*  transmission={"auto"}*/}
      {/*  price={"1111"}*/}
      {/*  run={"222"}*/}
      {/*/>*/}
    </>
  );
}

export default App;
