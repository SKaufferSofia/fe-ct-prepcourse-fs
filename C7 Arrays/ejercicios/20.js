function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:

  var primerElemento = array[0]

  for (var i = 1; i < array.length; i++) {
    if (array[i] === primerElemento) {
      return true
    } 
  } return false

}

console.log (todosIguales([97, 100, 190, 9]));


module.exports = todosIguales;
