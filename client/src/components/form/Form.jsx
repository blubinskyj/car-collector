import "./Form.css";
import { useState } from "react";

const Form = () => {
  const [data, setData] = useState({});

  let obj = {
    brand: "",
    model: "",
    yearFrom: "",
    yearTo: "",
    priceFrom: "",
    priceTo: "",
    city: "",
  };

  // const car = {
  //   image:
  //     "https://cdn1.riastatic.com/photosnew/auto/photo/volkswagen_tiguan__513741891bx.jpg",
  //   link: "https://auto.ria.com/uk/auto_volkswagen_tiguan_35177119.html",
  //   title: "lanos",
  //   year: "2001",
  //   price: "1111",
  //   run: "222",
  //   city: "lviv",
  //   transmission: "",
  //   volume: "1.5",
  //   site: "autoria",
  // };

  const fetchData = () => {
    fetch("http://127.0.0.1:5000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  };

  return (
    <div className={"form-container"}>
      <div>
        <input
          type="text"
          placeholder={"марка"}
          id={"brand"}
          name={"brand"}
          onChange={(e) => (obj.brand = e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder={"модель"}
          id={"model"}
          name={"model"}
          onChange={(e) => (obj.model = e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder={"рік від"}
          id={"yearFrom"}
          name={"yearFrom"}
          onChange={(e) => (obj.yearFrom = e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder={"рік до"}
          id={"yearTo"}
          name={"yearTo"}
          onChange={(e) => (obj.yearTo = e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder={"ціна від"}
          id={"priceFrom"}
          name={"priceFrom"}
          onChange={(e) => (obj.priceFrom = e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder={"ціна до"}
          id={"priceTo"}
          name={"priceTo"}
          onChange={(e) => (obj.priceTo = e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder={"місто"}
          id={"city"}
          name={"city"}
          onChange={(e) => (obj.city = e.target.value)}
        />
      </div>
      <div>
        <input type="submit" onClick={fetchData} />
      </div>
    </div>
  );
};

export default Form;
