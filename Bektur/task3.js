function parser(str) {
    let num = 0;
    const array = [];
    for (let i = 0; i < str.length;i++){
        if(str[i] === 'i'){
            num++
        }
        if(str[i] === 'd'){
            num--
        }
        if (str[i] === 's'){
           num = Math.pow(num, 2);
        }
        if (str[i] === 'o'){
            array.push(num);
        }
    }
    return array;
}

console.log(parser('iiisdoso'));