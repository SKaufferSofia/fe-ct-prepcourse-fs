function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:

  var resultado = 0 

  arguments.forEach(element => {
    resultado = resultado * element
  });

  return resultado

}

console.log (multiplicarArgumentos(5, 5))

module.exports = multiplicarArgumentos;
