function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:

  // var tablaDelSeis = [0,1,2,3,4,5,6,7,8,9,10]
  // var resultados = [] 

  // for (var i = 0 ; i < tablaDelSeis.length; i++) {
  //   resultados.push(tablaDelSeis[i] * 6)
  // }
  // return resultados

  var resultados = [] 

  for (var i = 0; i < 10;i++) {
    resultados.push(i * 6)
  }
  return resultados
}

console.log (tablaDelSeis())

module.exports = tablaDelSeis;
