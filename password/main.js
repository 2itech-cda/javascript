// main.js

const p = new Password();
// p.exclude(Password.symbols|Password.lowers);
// p.include(Password.lowers);
// console.log(p.generate(20));

let options = document.querySelector('#options');

p.data.forEach(obj => {
    // options.innerHTML = '';

    options.innerHTML += `
        <li class="list-group-item">
            ${obj.name}
            (${obj.chars})
        </li>
    `;
});
