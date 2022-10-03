import React from 'react';
import s from './Card.module.css';

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return (
    <div className={s.container}>

      <div className={s.buttonContainer}>
      <button onClick={onClose} className={s.button}>✖</button>
      </div>

      <div>
      <h4>{name}</h4>
      </div>

      <div className={s.dataContainer}>
        <p className={s.maxName}>Max:</p> 
        <p className={s.maxData}>{max}</p>
        <p className={s.minName}>Min:</p>
        <p className={s.minData}>{min}</p>
        <img className={s.img} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt=""/>
      </div>

      

    </div>
    )
};