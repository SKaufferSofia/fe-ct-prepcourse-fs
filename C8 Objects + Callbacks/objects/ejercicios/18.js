function agregarAmigo(objetoUsuario, nuevoAmigo) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
  // Debes agregar el "nuevoAmigo" al final de este arreglo.
  // Retornar el objeto.
  // Tu código:

 var amigo = objetoUsuario.amigos
 amigo.push(nuevoAmigo) 

 return objetoUsuario

}

console.log (agregarAmigo({amigos: ['Ben', 'Austen', 'Ryan', 'Mike', 'Young'],},'Shay'))
//npm test M8OT18.test.js
module.exports = agregarAmigo;
