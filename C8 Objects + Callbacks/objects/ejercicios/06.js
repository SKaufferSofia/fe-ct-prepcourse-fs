const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:

  var totalPropiedades = 0

 for (var prop in objeto) {
  if (objeto.hasOwnProperty(prop)) {
    totalPropiedades = totalPropiedades + 1
  }
 } 
 return totalPropiedades

};

console.log(contarPropiedades({ a: 1, b: 2, c: 3 }))

module.exports = contarPropiedades;
