let input = prompt("Ingresa tu código de descuento");


var codepromo = function() {
    while (input != "DESCUENTO50") {
        alert("El código " + input + " no es válido");
        input = prompt("Ingresa un código válido");
    }
    if (input = "DESCUENTO50") {  
        alert("Tienes $50 de descuento en tu membresía.")
    }
}

codepromo();