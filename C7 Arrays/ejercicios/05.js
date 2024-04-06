function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.unshift(elemento);
  return array;
}

console.log (agregarItemAlComienzoDelArray([97, 100, 80, 55, 72, 94], 'Hola'))

module.exports = agregarItemAlComienzoDelArray;