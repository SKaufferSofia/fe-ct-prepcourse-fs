function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  var contador = 0

  arrayOfNums.forEach(element => {
    contador = contador + element
  });
  return contador

}

console.log (agregarNumeros([10, 10, 16]))

module.exports = agregarNumeros;
