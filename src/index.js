const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // '.' = '10'
    // '-' = '11'
    // '**********' = ' '
    const arr = [];
    for (let i = 0; i < expr.length; i += 10) {
        arr.push(expr.slice(i, i + 10));
    }
    const symb = arr.map((num) => {
        const subarray = [];
        for (let i = 0; i < 10; i += 2) {
            const sliced = num.slice(i, i + 2);
            if (sliced === '10') {
                subarray.push('.');
            }
            if (sliced === '11') {
                subarray.push('-');
            }
            if (sliced === '**') {
                subarray.push('**');
            }

        }

        return subarray.join('');
    });
    console.log(symb);

    return symb.map((item) => item.includes('*') ? ' ' : MORSE_TABLE[item]).join('');
}

module.exports = {
    decode
}