import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/card/Card.jsx";
import Form from "./components/form/Form.jsx";

function App() {
  const [cars, setCars] = useState([]);

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
    <>
      <Form
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        formData
      />
      {cars &&
        cars.map((item) => (
          <Card
            link={item.link}
            site={item.site}
            city={item.city}
            image={item.image}
            year={item.year}
            title={item.title}
            volume={item.volume}
            transmission={item.transmission}
            price={item.price}
            run={item.run}
          />
        ))}
    </>
  );
}

export default App;
