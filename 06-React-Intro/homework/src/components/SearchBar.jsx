import React from 'react';

export default function SearchBar(props) { //props.onSearch
  // acá va tu código
  return (
    <div>
      <input type="text" name="cityName" id="cityName" placeholder='Ciudad...'/>
      <button onClick={props.onSearch}>Agregar</button>
    </div>
  )
};