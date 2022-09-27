import React from 'react';
import s from './SearchBar.module.css';

export default function SearchBar({onSearch}) {
  // acá va tu código
  return (
    <div>

      <input className={s.input} type="text" placeholder='Ciudad...'/>
      <button className={s.button} onClick={() => onSearch('Ingrese una ciudad 🛑🚫')}>Agregar</button>

      {/* se escribe de esta manera ⬆⬆ porque la funcion espera un valor */}
    </div>
  )
};