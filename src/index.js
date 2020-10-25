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
    // split a string by 10 symbols
    let arrOfNumbers = [];

    for (let i = 0; i < expr.length; i+=10) {
        arrOfNumbers.push(expr.slice(i, i + 10).split(''));
    }

    let arrOfMorse = [];

    // decimal code to Morse code
    arrOfNumbers.forEach(decimal => {
        // check **********
        if (decimal == '**********') {
            arrOfMorse.push('');
            return;
        }

        let letter = '';
        for (let i = 0; i < decimal.length; i += 2) {
            if (decimal[i] + decimal[i + 1] == 11) {
                letter += '-';
            } else if (decimal[i] + decimal[i + 1] == 10) {
                letter += '.';
            }
        }
        arrOfMorse.push(letter);
    });


    // convert to normal letters
    let result = '';
    arrOfMorse.forEach(elem => {
        if (elem == '') { // add space letter if we have it
            result += ' ';
            return;
        }
        result += MORSE_TABLE[elem];
    });

    return result;
}

module.exports = {
    decode
}