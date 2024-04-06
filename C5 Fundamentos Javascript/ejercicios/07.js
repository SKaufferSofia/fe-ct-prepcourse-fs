function esTipoDato(valor) {
  // La función recibe un argumento "valor".
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código: 
  var global = typeof valor
  return global;
}

console.log (esTipoDato("Sofia"));

module.exports = esTipoDato;
