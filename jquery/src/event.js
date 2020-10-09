class MyEvent {

    constructor() {
        this.events = [];
    }

    /**
     * Bind permet de lier un événement à un objet.
     * 
     * @param {string} evt click, mouseover, keyup, ...
     * @param {callback} fn callback
     * @param {object} target élément HTML sur leque on applique l'événement 
     */
    bind(evt, fn, target) {
        // Ici, si l'événement existe on le supprime.
        this.unbind(evt, target);

        // Ajout de l'événement sur l'objet (target).
        target.addEventListener(evt, fn, false);

        // On ajoute l'événement dans le tableau pour le retrouver avec find.
        this.events.push({
            type: evt,
            event: fn,
            target: target
        });
    }

    /**
     * click,
     * Find permet de chercher un événement dans le tableau.
     * On recherche par le type d'événement : click, mouseover, keyup, ...
     * 
     * @param {string} evtType click, mouseover, keyup
     */
    find(evtType) {
        return this.events.filter(e => e.type === evtType)[0];
    }

    /**
     * Unbind permet de supprimer la liaison d'un évenement d'un objet.
     * 
     * @param {string} evt click, keyup, mouseover, ...
     * @param {object} target 
     */
    unbind(evt, target) {
        const foundEvt = this.find(evt);

        if (foundEvt !== undefined) {
            target.removeEventListener(foundEvt.type, foundEvt.event, false);
        }

        this.events = this.events.filter(e => e.type !== evt);
        return this;
    }
}
