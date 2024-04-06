function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  var promedio = 0
  

  resultadosTest.forEach(element => {
    promedio = (promedio + element) 
  });
  return  promedio / (resultadosTest.length)
  

}

console.log (promedioResultadosTest([97, 100, 80, 55, 72, 94]))

module.exports = promedioResultadosTest;

// promedio es la suma de las "notas" divido la cantidad de esas "notas"