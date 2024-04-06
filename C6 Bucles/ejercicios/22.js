function combine(str1, str2, str3) {
   // Esta función debe combinar de forma alternada cada caracter de cada string.
   // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
   // Los strings pueden tener cualquier tamaño.
   // EJEMPLOS
   // combine("abc", "", "123") == "a1b2c3"
   // combine("abc", "12345", "") == "a1b2c345"
   // combine("abc", "12345", "67") == "a16b27c345"
   var resultado = '';
   var longitudes = [str1.length, str2.length, str3.length];
   var maxLongitud = Math.max(...longitudes);

   for (var i = 0; i < maxLongitud; i++) {
       if (str1[i] !== undefined && str1[i] !== '') {
           resultado += str1[i];
       }
       if (str2[i] !== undefined && str2[i] !== '') {
           resultado += str2[i];
       }
       if (str3[i] !== undefined && str3[i] !== '') {
           resultado += str3[i];
       }
   }

   return resultado;

}

console.log (combine('abc', '', ''))

/*
 1. Se como combinar cada caracter de cada string?
 2. se cuales son los tres argumentos?
 3. se como contabilizar aquellos strings que no estan vacios?


*/

module.exports = combine;
