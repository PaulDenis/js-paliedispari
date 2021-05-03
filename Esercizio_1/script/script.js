// 1 - Palindroma
// Chiedere all'utente di inserire una parola

var word = prompt("Inserisci la tua parola");
console.log(word);

// Creare una funzione per capire se la parola inserita è palindroma

if (palindrom(word)) {
    console.log("La tua parola è palindroma");
} else {
    console.log("La tua parola non è palindroma");
}