const { INCREMENTO, DECREMENTO, IMPAR, ASYNC } = require('../action-types');

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

// const incremento = () => {
//   return 
//   {
//     type: INCREMENTO
//   }
// };

function incremento() {
  return {type: INCREMENTO}
}

// const decremento = () => {
//   {
//     type: DECREMENTO
//   }
// };

function decremento() {
  return {type: DECREMENTO}
}

function impar() {
  return {type: IMPAR}
}

// function async() {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch({type: ASYNC})
//     }, 2000)
//   }
// }

function async() {
  return {
    type: ASYNC
  }
}

function async2() {
  return dispatch => {
    setTimeout(() => {
      dispatch(async())
    }, 3000)
  }
}

module.exports = {
  incremento,
  decremento,
  impar,
  async,
  async2
}