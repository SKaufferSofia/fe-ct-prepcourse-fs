function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var numeroMasGrande = Math.max(array.length)

  return array.indexOf(numeroMasGrande)
}

console.log (encontrarIndiceMayor([5, 4, 3, 2, 1]));

module.exports = encontrarIndiceMayor;
