const p = new Password();
p.exclude(Password.symbols);

const options = document.querySelector('#options');
const size = document.querySelector('#size');
const slider = document.querySelector('#slider');
const displayer = document.querySelector('#displayer');

displayer.style.cursor = 'pointer';

refresh();

size.addEventListener('input', () => {
    slider.value = size.value;
    refresh();
});

slider.addEventListener('input', () => {
    size.value = slider.value;
    refresh();
});

displayer.addEventListener('click', evt => {
    copyToClipboard(evt.target.textContent);
});
ù
options.addEventListener('click', evt => {
    const elem = evt.target;

    if (elem.type && elem.type === 'checkbox') {
        if (elem.checked) {
            p.include(elem.value);
        } else {
            p.exclude(elem.value);
        }

        refresh();
    }
});

function refresh() {
    displayer.textContent = p.generate(size.value);
    rangeFormList();
}

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

function copyToClipboard(text) {
    const dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
}
