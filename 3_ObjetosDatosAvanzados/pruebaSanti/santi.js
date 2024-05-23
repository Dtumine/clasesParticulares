

do { 

alert('Hermoso día para jugar "Piedra, papel o tijera", verdad?.. Comencemos!')


// PIEDRA, PAPEL, TIJERA

let piedra = 1
let papel = 2
let tijera = 3



let usuario = Number(prompt('Elige con números: 1 - Piedra.   2 - Papel.   3 - Tijera.'));
    

while (usuario <= 0 || usuario >= 4) {
    alert('Por favor, ingresa 1, 2 o 3.');
    usuario = Number(prompt('Elige: 1 - Piedra.   2 - Papel.   3 - Tijera.'));
}

if (usuario == piedra) {
    alert('Elegiste PIEDRA 🗿');
} else if (usuario == papel) {
    alert('Elegiste PAPEL 🧻');
} else if (usuario == tijera) {
    alert('Elegiste TIJERA ✂');
}

alert('Veamos que elige el PC ⏳');

let pc = Math.floor(Math.random() * 3) + 1;
if (pc == piedra) {
    alert('PC ha elegido PIEDRA 🗿');
} else if (pc == papel) {
    alert('PC ha elegido PAPEL 🧻');
} else if (pc == tijera) {
    alert('PC ha elegido TIJERA ✂');
}

if (usuario == pc) {
    alert('Esto es un EMPATE! 🤝');
} else if ((usuario == 3 && pc == 1) || (usuario == 1 && pc == 2) || (usuario == 2 && pc == 3)) {
    alert('Lo siento, PERDISTE! 👎');
} else {
    alert('Sos crack, GANASTE! 🙌');
}
  
   respuesta = prompt("Deseas seguir jugando? \n1-SI \n2-NO")

} while (respuesta === "1"); 

alert("Gracias por jugar, hasta la próxima!") 



