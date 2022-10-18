const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk');
const contador = require('./reducer');
const { incremento, decremento, impar, async2 } = require('./actions');

// En esta linea creamos nuestro store. Pasandole como parametro nuestro Reducer
var store = createStore(contador, applyMiddleware(thunk));

// Obtenemos el elemento con el id `valor`.
var valor = document.getElementById('valor');

// Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  var actualValue = store.getState().contador;
  // Seteamos el numero obtenido como texto dentro del elemento con id 'valor':
  valor.innerHTML = actualValue;

}

// Ejecutamos la funcion 'renderContador':
renderContador();

// Nos subscribimos al store pasandole la misma funcion. Asi cada vez que llegue una accion, ejecutamos la funcion:
let unsuscribe = store.subscribe(renderContador);


// Por ultimo, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la accion correspondiente:

const incrementarButton = document.getElementById('incremento');
const decrementarButton = document.getElementById('decremento');
const imparButton = document.getElementById('incrementoImpar');
const asyncButton = document.getElementById('incrementoAsync');

incrementarButton.addEventListener('click', () => store.dispatch(incremento()));
decrementarButton.addEventListener('click', () => store.dispatch(decremento()));
imparButton.addEventListener('click', () => store.dispatch(impar()));
asyncButton.addEventListener('click', () => store.dispatch(async2()));





// para la funcion asincrona hay que instalar la dependencia redux thunk


