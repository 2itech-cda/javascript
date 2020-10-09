
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

    wrap(selector) {
        // selector ne doit pas être tableau car un tableau peut être un objet.
        if (!Array.isArray(selector) && selector === Object(selector)) {
            this.elems = [selector];
        }
    
        if (typeof selector === 'string' || selector instanceof String) {
            this.elems = [...document.querySelectorAll(selector)]; // NodeList
        }
    }
}
