class Password {
    static lowers = 1;                                                                                // 00001
    static uppers = 2;                                                                                // 00010
    static numbers = 4;                                                                               // 00100
    static symbols = 8;                                                                               // 01000
    static brackets = 16;                                                                             // 10000
    static all = Password.lowers|Password.uppers|Password.numbers|Password.symbols|Password.brackets; // 11111

    constructor() {
        this.data = [
            { name: 'Minuscule', range: Password.lowers, chars: 'abcdefghijklmnopqrstuvwxyz' },
            { name: 'Majuscule', range: Password.uppers, chars: 'ABCDEFGHIJKLMOPQRSTVWXYZ' },
            { name: 'Chiffres', range: Password.numbers, chars: '0123456789' },
            { name: 'Symboles', range: Password.symbols, chars: '?-*%!@#_$.:;/' },
            { name: 'Crochets', range: Password.brackets, chars: '[]{}()<>' },
        ];

        this.setRange(Password.all);
    }

    generate() {

    }

    setRange(value) {
        this.range = value;
    } 

    exclude(value) {
        this.range &= ~value;
    }

    include(value) {
        this.range |= value;
    }
}
