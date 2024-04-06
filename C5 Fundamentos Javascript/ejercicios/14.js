function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos "str1" e "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Tu código:
  if (str1.length === str2.length) { 
    console.log (true)
    return true
  } else {
    console.log (false)
    return false
  }
};

tienenMismaLongitud ("Sofia", "Kauffer");



module.exports = tienenMismaLongitud;