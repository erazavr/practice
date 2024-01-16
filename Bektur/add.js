function reverseString(text) {
    const split = text.split("").reverse().join("");
    return split
}

console.log(reverseString('Практика'));