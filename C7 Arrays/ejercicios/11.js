function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  return array.map (
    (num) => {
      return num * 2
    }
  )
}

console.log (duplicarElementos([1, 2, 3, 4, 5]))

module.exports = duplicarElementos;
