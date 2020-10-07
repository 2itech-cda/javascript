// main.js

const p = new Password();

p.exclude(Password.symbols|Password.lowers);
//p.include(Password.lowers);

console.log(p.generate(20));
