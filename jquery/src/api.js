class Api {

    constructor(selector) {
        // Si il n'y pas de selector alors on arrête.
        if (!selector) {
            return;
        }

        // Les éléments séléctionnés par le querySelectorAll.
        this.elems = [];

        // $('h1') Si le selector est une chaîne de caractères alors querySelectorAll.
        // $(elem) Si selector est un element HTML alors on le place dans le tableau.
        this.wrap(selector);
    }

    /**
     * text permet de modifier le texte d'un élément.
     */
    text(value) {
        this.elems.forEach(elem => elem.textContent = value);
        return this;
    }

    // $('li').addClass('myStyle');
    // <li class="myStyle"></li>
    // ...variadic
    addClass(...className) {
        this.elems.forEach(elem => elem.classList.add(...className));
        return this;
    }

    toggleClass(className) {
        this.elems.forEach(elem => elem.classList.toggle(className));
        return this;
    }

    removeClass(...className) {
        this.elems.forEach(elem => elem.classList.remove(...className));
        return this;
    }

    // <li style="color: test"></li>
    // elem.style.backgroundColor = 'red';
    // elem.style.property = value;
    // elem.style['background-color'] = value;
    css(property, value) {
        this.elems.forEach(elem => elem.style[property] = value);
        return this;
    }

    // pair
    // $('li').even().addClass('myStyle');
    even() {
        this.elems = this.elems.filter((_elem, index) => index % 2 === 0);
        return this;
    }

    // impaire
    // $('li').odd().addClass('myStyle');
    odd() {
        this.elems = this.elems.filter((_elem, index) => index % 2 === 1);
        return this;
    }

    /**
     * Cette méthode permet de récupérer un selector
     * ou d'envelopper un élément déjà existant.
     */
    wrap(selector) {
        // selector ne doit pas être tableau car un tableau peut être un objet.
        if (!Array.isArray(selector) && selector === Object(selector)) {
            this.elems = [selector];
        }
    
        // Le résultat de querySelector retourne un NodeList.
        if (typeof selector === 'string' || selector instanceof String) {
            this.elems = [...document.querySelectorAll(selector)]; 
        }
    }
}
