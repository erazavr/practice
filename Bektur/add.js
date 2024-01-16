function reverseString(text) {
    const split = text.split("");
    const reverse = split.reverse();
    const join  = reverse.join("");

    return join
}

console.log(reverseString('Практика'));