import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/card/Card.jsx";
import Form from "./components/form/Form.jsx";

function App() {
  const [data, setData] = useState();
  const [search, setSearch] = useState();

  // useEffect(() => {
  //   fetch("http://127.0.0.1:5000")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       console.log(data.cars[0]);
  //     });
  // }, []);

  return (
    <>
      <Form />
      {/*{data?.cars[0] && (*/}
      {/*  <Card*/}
      {/*    link={data.cars[0].link}*/}
      {/*    site={data.cars[0].site}*/}
      {/*    city={data.cars[0].city}*/}
      {/*    image={data.cars[0].image}*/}
      {/*    year={data.cars[0].year}*/}
      {/*    title={data.cars[0].title}*/}
      {/*    volume={data.cars[0].volume}*/}
      {/*    transmission={data.cars[0].transmission}*/}
      {/*    price={data.cars[0].price}*/}
      {/*    run={data.cars[0].run}*/}
      {/*  />*/}
      {/*)}*/}
    </>
  );
}

export default App;
