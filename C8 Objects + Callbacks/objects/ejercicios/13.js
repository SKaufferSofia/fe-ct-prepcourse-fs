function eliminarPropiedad(objeto, propiedad) {
  // El parámetro "propiedad" es una propiedad del objeto que recibes.
  // Debes eliminarla del objeto y retornarlo finalmente.
  // Tu código:

  delete objeto[propiedad]
  
  return objeto
  
}

console.log (eliminarPropiedad({x: 1,y: 2,z: null,},"z"))

module.exports = eliminarPropiedad;
