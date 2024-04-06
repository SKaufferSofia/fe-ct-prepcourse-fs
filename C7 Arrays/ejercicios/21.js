function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  var buscados = ["Enero", "Marzo", "Noviembre"]
  var nuevoArreglo = [] 
  

   for (var i = 0; i < array.length; i++) {
    var meses = (array[i]) 
    if (buscados.includes(meses)) {
      nuevoArreglo.push(meses)
    }
  }

  if (nuevoArreglo.length === buscados.length) {
    return nuevoArreglo
  } else {
    return "No se encontraron los meses pedidos"
  }
  
}

console.log (mesesDelAño(['Marzo', 'Diciembre', 'Julio', 'Noviembre']))

module.exports = mesesDelAño;
