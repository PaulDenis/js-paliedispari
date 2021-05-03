function palindrom(word) {
    var palind = word.split("").reverse().join("");
    return palind === word;
}