import React, { useState } from "react";
import './SearchBar.css';

export default function SearchBar({onSearch}) {

  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("");
    }}>
      <input 
        className="input"
        type="text"
        placeholder="Ciudad..."
        onChange={(e) => handleInputChange(e)}
        value={city}
      />
      <input className="button" type="submit" value="Agregar" />
    </form>
  );
}
