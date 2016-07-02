var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var num = prompt("Introduce tu DNI (sin letra): ");
var letra = prompt("Introduce la letra: ");

letra = letra.toUpperCase();

if (num < 0 || num > 99999999) {
    alert("No has introducir un valor correcto");
} else {
    var posicion = num % 23;
    var letraCorrecta = letras[posicion];
    
    if (letra == letraCorrecta) {
        alert("El numero y la letra son correctos");
    } else {
        alert("La letra no corresponde con el número");
    }
}

