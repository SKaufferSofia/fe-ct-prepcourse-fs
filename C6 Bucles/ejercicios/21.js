function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:

  while (numero <= 100) {
  if (numero > 0 && (numero & (numero - 1)) === 0) {
    return true
  } else {
    return false
  }
} 
} 

console.log (esPotenciaDeDos (2));


module.exports = esPotenciaDeDos;
