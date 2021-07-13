// Cachipun

// ingreso de usuario de veces necesarias para jugar cachipun
const veces = parseInt(prompt("¿Cuantas veces jugamos al Cachipun?", "4"));
// Crear For para las veces a jugar

for (var i = 1; i <= veces; i++) {
    var jugador = prompt("Eliga piedra, papel o tijera");
    var pc = Math.floor(Math.random() * 3);
    // 0 es piedra
    // 1 es tijera
    // 2 es papel
    // eleccion del jugador
    switch (jugador) {
        // Primer caso, que sea piedra
        case "piedra":
            switch (pc) {
                case 0:
                    alert("Empate, cuak!")
                    break;
                case 1:
                    alert("Me has ganado, ¡Eres el Vencedor! derrotaste a la tijera")
                    break;
                case 2:
                    alert("Te gané, ¡Wuaaajajaja! (Introduce voz de maldad), el papel te envolvió")
                    break;
            }
            break;
            // Segundo caso, sea tijera
        case "tijera":
            switch (pc) {
                case 1:
                    alert("Empate, cuak!")
                    break;
                case 2:
                    alert("Me has ganado, ¡Eres el Vencedor! derrotaste al papel")
                    break;
                case 0:
                    alert("Te gané, ¡Wuaaajajaja! (Introduce voz de maldad), la piedra te rompió")
                    break;
            }
            break;
            // Tercer caso, sea papel
        case "papel":
            switch (pc) {
                case 2:
                    alert("Empate, cuak!")
                    break;
                case 0:
                    alert("Me has ganado, ¡Eres el Vencedor! derrotaste a la piedra")
                    break;
                case 1:
                    alert("Te gané, ¡Wuaaajajaja! (Introduce voz de maldad), la tijera te cortó")
                    break;
            }
            break;
            // Cuando no escriba nada
        case "":
            alert("No escribiste nada, ¿Me quieres Vencer? puf, te restare el puntaje")
            break;
            // Cuando lo escriba mal
        default:
            alert("Lo escribiste mal, El aguita de Dios o la varita mágica son ilegales para este juego. Recuerda que es piedra, papel o tijera")

    }
}