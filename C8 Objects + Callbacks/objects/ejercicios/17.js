function actualizarPassword(objetoUsuario, nuevaPassword) {
  // Reemplaza la contraseña guardada en la propiedad "password" del "objetoUsuario".
  // La nueva contraseña la recibes por parámetro.
  // Retornar el objeto.
  // Tu código:

  return objetoUsuario.password = nuevaPassword

}
console.log (actualizarPassword({password: "Me encanta JS!",},"Me encanta JS mucho más!"))
//npm test M8OT17.test.js
module.exports = actualizarPassword;
