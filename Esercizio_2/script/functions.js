//generiamo un numero randomico dato un range di numeri
function randomNum (num1, num2) {
    return Math.floor(Math.random() * (num2 - num1 + 1) + num1);
}

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function isEven (num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }

}