// main.js

// pas de HTML
// pas de querySelector, pas de DOM
// Juste du code logique pure
// ici vos tests

const p = new Password();

p.set(Password.all);

p.exlude(Password.brackets|Password.symbols);
p.include(Password.symbols|Password.num|Password.upper|Password.lower);

console.log(p.generate(20)); // sortie : Wd2xXr0.eve0!Xt.MLuL

Password.all = Password.symbols|Password.num|Password.upper|Password.lower


var chars = 'abcdefg';
