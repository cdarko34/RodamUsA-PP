let codigo = prompt("Ingresa tu código de descuento");

if (codigo == "DESCUENTO50"){
    alert("Cuentas con $50 de descuento en tu membresía");
    console.log("Cuentas con $50 de descuento en tu membresía");
} else {
    console.log("Ingresa un código válido😔");
}

do {
    codigo = prompt("Ingresa tu código de descuento");
} while(codigo !== "DESCUENTO50");