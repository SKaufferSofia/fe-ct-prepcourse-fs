function verificarPassword(objetoUsuario, password) {
  // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:

  if (objetoUsuario.password === password) {
    return true
  } else {
    return false
  }

}

console.log (verificarPassword({password: "Me encanta JS!",},"Me encanta JS!"))

module.exports = verificarPassword;
