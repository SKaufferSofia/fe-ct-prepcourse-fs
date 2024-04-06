function invocarMetodo(objeto, metodo) {
  // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
  // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
  // NOTA: no necesitas retornar nada.
  // Tu código:
 
  var funcion = objeto[metodo]
  console.log(funcion)


}
console.log (invocarMetodo({nombre: function () {this.x++;}, Edad: 27},"nombre"))

/*
 -- 1- metodo tiene el mismo nombre que una propiedad del objeto

*/

module.exports = invocarMetodo;
