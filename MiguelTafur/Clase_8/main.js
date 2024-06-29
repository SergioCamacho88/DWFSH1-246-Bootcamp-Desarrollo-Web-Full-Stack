function juego(usuario) {
    const opciones = ["piedra", "papel", "tijera"];
    const computadora = opciones[Math.floor(Math.random() * opciones.length)];
    console.log("la computadora eligio ", computadora)
    let resultado = '';

    if (usuario === computadora) {
        resultado = "Empate Ambos eligieron " + usuario;
    } else if (
        (usuario === "piedra" && computadora === "tijera") ||
        (usuario === "papel" && computadora === "piedra") ||
        (usuario === "tijera" && computadora === "papel")
    ) {
        resultado = "Ganaste " + usuario + "le gana a " + computadora;
    } else {
        resultado = "Perdiste " + computadora + "le gana a " + usuario;
    }

    alert(resultado);
}