function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:

  if (numeros.length === 0) {
    return null
  }

  for (var i=0; i< numeros.length; i++) {
    if (numeros[i] !== i + numeros[0]) {
      return numeros[0] + i
    }
  }
  return null

}


console.log (encontrarNumeroFaltante([1, 2, 3, 4, 6, 7, 8, 9]))

module.exports = encontrarNumeroFaltante;