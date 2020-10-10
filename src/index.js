const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let symbolArray = [];
    let k = 0;
    for (let i = 0; i < Math.ceil(expr.length / 10); i++){
        symbolArray.push('');
        for (let j = 0; j < 5; j++){
            if (expr[k] === '1' && expr[k + 1] === '0') symbolArray[i] += '.';
            else if (expr[k] === '1' && expr[k + 1] === '1') symbolArray[i] += '-';
            else if (expr[k] === '*') symbolArray[i] += '**';
            k += 2;
        }
    }

    symbolArray[symbolArray.length -1].padEnd('0', 10);
    symbolArray = symbolArray.map(elem => elem === '**********' ? ' ' : elem);

    for (let i = 0; i < symbolArray.length; i++) {
        if (symbolArray[i] !== ' ') {
            symbolArray[i] = MORSE_TABLE[symbolArray[i]];
        }
    }
    return symbolArray.join('');
}
module.exports = {
    decode
}
