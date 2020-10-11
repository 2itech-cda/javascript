class Password {

    static lowers = 1;     // 00001
    static uppers = 2;     // 00010
    static numbers = 4;    // 00100
    static symbols = 8;    // 01000
    static brackets = 16;  // 10000

    static all = Password.lowers |
        Password.uppers |
        Password.numbers |
        Password.symbols |
        Password.brackets; // 11111 - 11110 Password.all & ~Password.lowers

    constructor() {
        this.data = [{
                name: 'Minuscule',
                range: Password.lowers,
                chars: 'abcdefghijklmnopqrstuvwxyz'
            },
            {
                name: 'Majuscule',
                range: Password.uppers,
                chars: 'ABCDEFGHIJKLMOPQRSTVWXYZ'
            },
            {
                name: 'Chiffres',
                range: Password.numbers,
                chars: '0123456789'
            },
            {
                name: 'Symboles',
                range: Password.symbols,
                chars: '?-*%!@#_$.:;/'
            },
            {
                name: 'Crochets',
                range: Password.brackets,
                chars: '[]{}()<>'
            },
        ];

        // Le choix de la rangée de caractèrew choisie par l'utilisateur.
        this.setRange(Password.all);
    }

    getChars() {
        let chars = '';

        this.data.forEach(obj => {
            if (obj.range & this.range) {
                chars += obj.chars;
            }
        });

        return chars;
    }

    generate(size = 16) {
        if (this.range === 0) {
            this.setRange(Password.all);
        }

        let str = '';
        const chars = this.getChars();

        for (let i = 0; i < size; i++) {
            str += chars[Math.floor(Math.random() * chars.length)];
        }

        return str;
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