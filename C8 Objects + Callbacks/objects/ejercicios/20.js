function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  var contador = 0
  var posteo = objetoUsuario.posts

  for (var i = 0; i < posteo.length; i++) {
    var objetoDelArreglo = posteo[i]
    
    var sumaDeLikes = objetoDelArreglo.likes
   contador = contador + sumaDeLikes
    
  } return contador

}
// npm test M8OT20.test.js
console.log (sumarLikesDeUsuario({
  usernombre: 'Jhon Doe',
  password: 'JavaScript es genial!',
  posts: [
    {
      id: '1',
      title: 'Aventuras en JS!',
      likes: 10,
    },
    {
      id: '2',
      title: 'Soy Henry!',
      likes: 100,
    },
    {
      id: '3',
      title: 'Qué es un JavaScript?',
      likes: 35,
    },
    {
      id: '4',
      title: 'JS Objects for Dummies',
      likes: 42,
    },
    {
      id: '5',
      title: 'Educación online',
      likes: 99,
    },
  ],
}))

module.exports = sumarLikesDeUsuario;
