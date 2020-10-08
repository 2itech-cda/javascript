const ul = document.querySelector('ul');
const list = document.querySelectorAll('li'); // NodeList

list.forEach(elem => {
    elem.style.backgroundColor = 'yellow';
});

const li = document.createElement('li');        // <li></li>
const a = document.createElement('a');          // <a></a>
const text = document.createTextNode('Item 4'); // #TEXT

a.href="#";
a.appendChild(text);
li.appendChild(a); // <li><a>Item 4</a></li>
ul.appendChild(li);

// const child = ul.childNodes[2];
// child.remove();
// console.log(ul.childNodes);
//list[1].remove();
//ul.removeChild(list[1]);

ul.insertBefore(li, list[1]);

// Exemple d'une fonction de création d'un élément li.
function createLi(str) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    let text = document.createTextNode(str);

    a.appendChild(text)
    li.appendChild(a);

    return li;
}