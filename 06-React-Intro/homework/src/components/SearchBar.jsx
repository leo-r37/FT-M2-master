import React from 'react';

export default function SearchBar(props) { //props.onSearch
  // acá va tu código

  // return (
  //   <div>
  //     <input type="text" name="cityName" id="cityName" placeholder='Ciudad...'/>
  //     <button onClick={props.onSearch}>Agregar</button>
  //   </div>
  // )

  // ----------------------------------- CODE REIEW --------------------------------

  return (
    <div>
      <input type="text" placeholder='Ciudad...'/>
      <button onClick={() => props.onSearch('Buscando la city porteña')}>Agregar</button>

      {/* se escribe de esta manera ⬆⬆ porque la funcion espera un valor */}
    </div>
  )

  // ----------------------------------- CODE REIEW --------------------------------

  
};