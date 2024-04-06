function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

  var resultado = [];

  for (var i = 0 ; i < array.length; i++) {
    resultado.push(array[i] * i)
  }
  return resultado
}

console.log (multiplicarElementosPorIndice([1, 2, 3, 4, 5]))

module.exports = multiplicarElementosPorIndice;
