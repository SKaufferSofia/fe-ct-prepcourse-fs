function esPalindromo(string) {
   // La función recibe un argumento "string".
   // Verifica si este string es palíndromo o no.
   // Retorna true si lo es, caso contrario, retorna false.
   // IMPORTANTE: Un palíndromo es una palabra o frase
   // que se lee igual hacia adelante que hacia atrás.
   // Tu código:

   var palindromo = "";

   for (var i = string.length - 1; i >= 0; i--) {
      palindromo = palindromo + string[i]
   } if (palindromo === string) {
      return true
   } else {
      return false
   }

}

console.log (esPalindromo ("hola"))


module.exports = esPalindromo;
