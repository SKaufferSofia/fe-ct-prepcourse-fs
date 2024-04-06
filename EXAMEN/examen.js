function palabraMasLarga(frase) {
    var palabras = frase.join(" ").split(" ");
    
    // Inicializar la longitud máxima y la palabra más larga
    var longitudMaxima = 0;
    var palabraMasLarga = '';

    // Iterar sobre cada palabra para encontrar la más larga
    palabras.forEach(function(palabra) {
        if (palabra.length > longitudMaxima) {
            longitudMaxima = palabra.length;
            palabraMasLarga = palabra;
        }
    });

    return palabraMasLarga;

}

console.log (palabraMasLarga(["hola esto string","frase con palabra"]))

//// 

function mayorMenosMenor (numeros) {
   var numeroMaximo = Math.max(...numeros)
   var numeroMinimo = Math.min(...numeros)
    return numeroMaximo - numeroMinimo
    
}

console.log (mayorMenosMenor([20,31,11,15,32]))