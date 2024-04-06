function esPar(num) {
  // Retorna true si "num" es par.
  // De lo contrario, retorna false.
  // Tu código:
  if (num % 2 === 0) {
    console.log (true)
    return true
  } else {
    console.log (false)
    return false
  }
}
esPar (2);

module.exports = esPar;
