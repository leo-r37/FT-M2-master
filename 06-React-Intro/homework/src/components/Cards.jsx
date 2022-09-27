import React from 'react';
import Card from './Card';

export default function Cards({cities}) { // props.cites = [Londres, Cairns, Denver]
  // acá va tu código
  // tip, podés usar un map
  // return (
  //   cities.map(c => <Card max={c.main.temp_max}
  //     min={c.main.temp_min}
  //     name={c.name}
  //     img={c.weather[0].icon}
  //     onClose={() => alert(c.name)}
  //     />
  //   )
  // )

  // ------------------------------------ CODE REIEW ----------------------------

  return (
    <div>
      {
        cities && cities.map(city => (
          <Card 
            key={city.id}
            max={city.main.temp_max}
            min={city.main.temp_min}
            name={city.name}
            img={city.weather[0].icon}
            onClose={() => alert(city.name)}
          />
        )
        )
      }
    </div>
  )

  // ------------------------------------ CODE REIEW ----------------------------


};