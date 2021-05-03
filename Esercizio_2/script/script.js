// 2 - Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.

var pariDispari = prompt("Pari o dispari?").toLowerCase();
var playerNum = prompt("Scegli un numero da 1 a 5!");
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
    console.log("Hai vinto");
} else {
    console.log("Hai perso");
}