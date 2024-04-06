function filter(arrayOfStrings) {
   // Debes identificar todos los elementos del arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:

   var nuevoarreglo = arrayOfStrings.filter(function (string) {
    if (string[0] === "a") {
      return string
    }
   });

   return nuevoarreglo;

}

console.log (filter([
   'abajo',
   'pera',
   'escalera',
   'alerta',
   'indice',
   'azteca',
   'arbol',
   'buzo',
 ]))

module.exports = filter;
