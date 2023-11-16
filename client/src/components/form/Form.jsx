import "./Form.css";
import { useState } from "react";

const Form = ({ handleSubmit, handleInputChange, formData }) => {
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
        <div className={"number-container"}>
          <div className={"number-block"}>
            <div>
              <input
                type="number"
                min="1900"
                max={"2023"}
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
                min="1900"
                max={"2023"}
                placeholder={"рік до"}
                id={"yearTo"}
                name={"yearTo"}
                value={formData.yearTo}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={"number-block"}>
            <div>
              <input
                type="number"
                min={"1"}
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
                min={"1"}
                id={"priceTo"}
                name={"priceTo"}
                value={formData.priceTo}
                onChange={handleInputChange}
              />
            </div>
          </div>
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
