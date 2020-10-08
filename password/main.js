const p = new Password();
p.exclude(Password.symbols);

const options = document.querySelector('#options');
const size = document.querySelector('#size');  // <input id="size">
const slider = document.querySelector('#slider');

// addEventListener('type', callback, boolean: direction de l'événement);
// size.addEventListener('input', () => slider.value = size.value );

size.addEventListener('input', event => {
    // console.log(event.target === size);
    // console.log(event.target.value);
    // console.log(size.value);
    slider.value = size.value;
});

rangeFormList();

function rangeFormList() {
    options.innerHTML = '';

    p.data.forEach(obj => {
        options.innerHTML += `
            <li class="list-group-item">
                ${obj.name}
                (${obj.chars})

                <input type="checkbox" value="${obj.range}" ${ obj.range & p.range ? 'checked' : '' }>
            </li>
        `;
    });
}