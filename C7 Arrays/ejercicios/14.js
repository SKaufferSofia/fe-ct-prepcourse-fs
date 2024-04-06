function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código: 
  var contador = 0
  array.forEach(element => {
    if (element > 10) {
      contador = contador + 1
    } 
  });
  return contador
} 

console.log (contarElementosMayoresA10([10, 20, 30, 40, 50]))

module.exports = contarElementosMayoresA10;
