import "./Form.css";
import { useState } from "react";

const Form = () => {
  const [data, setData] = useState();

  const formData = new FormData();

  const car = {
    image:
      "https://cdn1.riastatic.com/photosnew/auto/photo/volkswagen_tiguan__513741891bx.jpg",
    link: "https://auto.ria.com/uk/auto_volkswagen_tiguan_35177119.html",
    title: "lanos",
    year: "2001",
    price: "1111",
    run: "222",
    city: "lviv",
    transmission: "",
    volume: "1.5",
    site: "autoria",
  };

  const fetchData = () => {
    fetch("http://127.0.0.1:5000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(car),
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
        <input type="text" placeholder={"марка"} />
      </div>
      <div>
        <input type="text" placeholder={"модель"} />
      </div>
      <div>
        <input type="text" placeholder={"рік від"} />
      </div>
      <div>
        <input type="text" placeholder={"рік до"} />
      </div>
      <div>
        <input type="text" placeholder={"ціна від"} />
      </div>
      <div>
        <input type="text" placeholder={"ціна до"} />
      </div>
      <div>
        <input type="text" placeholder={"місто"} />
      </div>
      <div>
        <input type="submit" onClick={fetchData} />
      </div>
    </div>
  );
};

export default Form;
