function parser(str) {
    let num = 0
    let a = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'i') {
            num = num + 1
        } else if (str[i] === 'd') {
            num = num - 1
        } else if (str[i] === 's') {
            num = Math.pow(num, 2)
        } else if (str[i] === 'o') {
            a.push(num)
        }
    }
    console.log(a)
}


parser("iiisdoso")
