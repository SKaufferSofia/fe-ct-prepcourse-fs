function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  var contador = {} 
  
  for (var i =0 ; i < numeros.length; i++) {
     // Si el número ya está en el contador, significa que es repetido y lo retornamos
     if (contador[numeros[i]] !== undefined) {
      return numeros[i];
  }
}

return null;

}
  

console.log (encontrarElementoRepetido([1, 2, 3, 3, 4, 5]))

module.exports = encontrarElementoRepetido;