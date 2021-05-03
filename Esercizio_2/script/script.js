// 2 - Pari e Dispari

// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var pariDispari = prompt("Pari o dispari?").toLowerCase();
do {
    var playerNum = prompt("Scegli un numero da 1 a 5!");
} while (playerNum <1 || playerNum > 5);
console.log(pariDispari);
console.log(playerNum);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
var pcNum = randomNum(1, 5); //Attenzione!! Da inserire prima il minore tra i due numeri!!
console.log(pcNum);

// Sommiamo i due numeri
var sum = parseInt(playerNum) + pcNum;
console.log(sum);

// Dichiariamo chi ha vinto.
if (pariDispari == "pari" && isEven(sum) || pariDispari == "dispari" && isEven(sum) == false) {
   var win = "Hai vinto";
   document.getElementById("sum").innerHTML = "La somma è <span>" + sum + "</span>. Di conseguenza:";
   document.getElementById("result").innerHTML = win;

} else {
    var lose = "Hai perso";
    document.getElementById("sum").innerHTML = "La somma è <span>" + sum + "</span>. Di conseguenza:";
    document.getElementById("result").innerHTML = lose;
}

//innerHTML

document.getElementById("pariDispari").innerHTML = "Hai scelto di essere: " + "<span>" + pariDispari + "</span>";
document.getElementById("player_num").innerHTML = "Hai scelto il numero: " + "<span>" + playerNum + "</span>";
document.getElementById("pc_num").innerHTML = "Il pc ha scelto il numero: " + "<span>" + pcNum + "</span>";
