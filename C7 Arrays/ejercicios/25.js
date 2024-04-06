function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:

  var resultado = 0

  for (var i = 0; i < numeros.length; i++) {

    if (numeros[i] % 2 !== 0) {
      continue
    }
    
    resultado = resultado + 1
  }
  return resultado
}

console.log (contarParesConContinue([1, 2, 3, 4, 5, 6]))

module.exports = contarParesConContinue;
