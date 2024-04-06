function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:

  if (objetoUsuario.email) {
    return true
  } else {
    return false
  }


}

console.log (tieneEmail({ usernombre: 'Samuel', email: 'samuel@email.com' }))

module.exports = tieneEmail;
