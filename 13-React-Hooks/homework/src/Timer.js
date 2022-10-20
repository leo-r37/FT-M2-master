import React, { useEffect, useState, useRef } from 'react';
import './Timer.css';

const Timer = () => {

  const toggle = () => setActive(!active);
  const reset = () => {
    let input = document.getElementById('input')
    setSeconds(0);
    setActive(false);
    input.value = 0;
  }
  const changeType = () => {
    type === 'Counter' ? setType('Countdown') : setType('Counter');
    setActive(false);
  }
  const addSeconds = () => {
    let ref = myRef.current.value
    setSeconds(ref)
  }

  const [seconds, setSeconds] = useState(0);
  const [active, setActive] = useState(false);
  const [type, setType] = useState('Counter');

  const myRef = useRef(null);

  useEffect(() => {
    let interval = null;
    if (active && type === 'Counter') {
      interval = setInterval(() => {
        setSeconds(seconds => seconds +1);
      }, 1000);
    }
    if (active && type === 'Countdown') {
      interval = setInterval(() => {
        setSeconds(seconds => seconds -1);
      }, 1000);
    }

    if (!active && seconds !== 0 && type === 'Counter') {
      clearInterval(interval);
    }
    if (seconds === 0 && type === 'Countdown') {
      reset();
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [active, seconds, type]);


  return (
    <div className="app">
      <div className="time">
        {seconds}"
      </div>
      <div className="row">
      <button className={`button button-primary button-primary-${active ? 'active' : 'inactive'}`} onClick={toggle}>
          {active ? '||' :  '▶'}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
      <button className="button" onClick={changeType}>
          {type}
      </button>
      {type === 'Countdown' && <input id='input' type="number" ref={myRef} onChange={addSeconds} placeholder="Ingresa Segundos" autoComplete="off"/>}
    </div>
  );
};

export default Timer;

