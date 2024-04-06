function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var resultante = []

  for (var i = 0; i < array.length; i++) {
    resultante.push(array[i].toUpperCase())
  }

  return resultante

}

console.log (convertirStringAMayusculas(['hello', 'world']))

module.exports = convertirStringAMayusculas;
