function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:

  var arreglo = array.map( (num) => {
    return cb(num)
  })

  return arreglo
  
}

var cb = function (num) {
  return num * num;
}

console.log (map([1, 2, 3, 4, 5], cb))

module.exports = map;
