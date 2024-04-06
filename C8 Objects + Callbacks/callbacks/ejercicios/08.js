const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:

  for (var i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array[i]
    } 
  }
  return "No se encontró el elemento"

};

var cb = element => element === 6 ;
console.log (buscarElemento([1, 2, 3, 4, 5], cb))

// npm test M8CT8.test.js

module.exports = buscarElemento;
