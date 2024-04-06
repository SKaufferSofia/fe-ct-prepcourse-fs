function esPositivoOInferiorA10(a) {
   // La función recibe un número "a" por parámetro.
   // Retorna true si es positivo y menor que 10.
   // Retorna false en caso contrario.
   // Tu código:
   if (a >= 0 && 10 >= a) { 
      return true
   } else {
      return false
   }
}

console.log (esPositivoOInferiorA10 (0));

module.exports = esPositivoOInferiorA10;
