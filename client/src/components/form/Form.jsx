import "./Form.css";
import { useState } from "react";

const Form = () => {
  const [cars, setCars] = useState({});
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    yearFrom: "",
    yearTo: "",
    priceFrom: "",
    priceTo: "",
    city: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:5000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Отримана відповідь від сервера:", data);
        setCars(data);
      })
      .catch((error) => {
        console.error("Помилка:", error);
      });
  };

  return (
    <div className={"form-container"}>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder={"марка"}
            id={"brand"}
            name={"brand"}
            value={formData.brand}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder={"модель"}
            id={"model"}
            name={"model"}
            value={formData.model}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder={"рік від"}
            id={"yearFrom"}
            name={"yearFrom"}
            value={formData.yearFrom}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder={"рік до"}
            id={"yearTo"}
            name={"yearTo"}
            value={formData.yearTo}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder={"ціна від"}
            id={"priceFrom"}
            name={"priceFrom"}
            value={formData.priceFrom}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder={"ціна до"}
            id={"priceTo"}
            name={"priceTo"}
            value={formData.priceTo}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder={"місто"}
            id={"city"}
            name={"city"}
            value={formData.city}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
