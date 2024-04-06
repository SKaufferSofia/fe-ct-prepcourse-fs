function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:

  for (var i = 0; i < objetoMuchosUsuarios.length; i++) {
    var objetoDelArreglo = objetoMuchosUsuarios[i]
    
    objetoDelArreglo.esPremium = true
    
    objetoDelArreglo
    
  } return objetoMuchosUsuarios


}

console.log (pasarUsuarioAPremium([
  { esPremium: false },
  { esPremium: false },
  { esPremium: false },
  { esPremium: false },
  { esPremium: false },
]))

module.exports = pasarUsuarioAPremium;
