/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:

  var arregloPadre = []
  
  for (var prop in objeto) {
   var arreglo = []
   arreglo.push(prop,objeto[prop])
   arregloPadre.push(arreglo)
  }  
  return arregloPadre
} 
console.log(deObjetoAarray({D: 1, B: 2, C: 3}))

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:

  var array = string.split("").sort()
  var contador = 1
  var objeto = {}

  for (var i =0; i < array.length;i++) {
    if (array[i] === array[i+1]) {
      contador++
    } else {
      objeto[array[i]] = contador;
      contador = 1;
    }
  } return objeto

} 
console.log (numberOfCharacters("adsjfdsfsfjsdjfhacabcsbajda"))

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
var array = string.split("")

array.sort(function (a,b) {
  if (a === a.toUpperCase() && b === b.toLowerCase()) {
    return -1
  } else if (a === a.toLowerCase() && b === b.toUpperCase()) {
    return 1
  } else {
    return 0
  }
});

return array.join("")

}

console.log (capToFront("soyHENRY"))


function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:

  var fraseEnPalabras = frase.split(" ")

  var palabrasInvertidas = fraseEnPalabras.map( (palabra) => {
    return (palabra.split("").reverse().join(""))
  })

  return palabrasInvertidas.join(" ")

}

console.log (asAmirror("The Henry Challenge is close!"))


function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:

  var numeroString = numero.toString()

  var nuevoInvertido = numeroString.split("").reverse().join("")

  if (nuevoInvertido === numeroString) {
    return "Es capicua"
  } else {
    return "No es capicua"
  }
} 

console.log (capicua(321123))

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
// return string.replace(/[abc]/g, '');

return string.split("").filter((letra) => !["a","b","c"].includes(letra)).join("")

} 

console.log (deleteAbc("abccvsvd"))


function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:

  return arrayOfStrings.sort(function(a, b){
    return a.length - b.length
  })

}
console.log (sortArray(['You', 'are', 'beautiful', 'looking']))

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  var arregloMayor;
  var arregloMenor;
  var arregloFinal = []

  if (array1.length < array2.length) {
    arregloMenor = array1
    arregloMayor = array2    
  } else if (array2.length < array1.length) {
    arregloMenor = array2
    arregloMayor = array1
  }

  for (var i = 0; i < arregloMayor.length; i++) {
    for (var j =0; j < arregloMenor.length; j++) {
      if (arregloMayor[i] === arregloMenor[j]) {
        arregloFinal.push(arregloMayor[i])
      }
    }
  }
return arregloFinal

}

console.log (buscoInterseccion([1, 2, 3], [5, 8, 7, 12]))


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
