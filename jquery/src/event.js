'use strict';

/**
 * @class Event
 */
class Event {

    constructor() {
        this.events = [];
    }

    /**
     * Bind an event to a target.
     * 
     * @param {string} type 
     * @param {Event~bind} callback Called if doing asynchronous event succeeds.
     * @param {object} target
     * @return {Event}
     */
    bind(type, callback, target) {
        target.addEventListener(type, callback, false);

        this.events.push({
            type: type,
            callback: callback,
            target: target
        });

        return this;
    }

    /**
     * Find an event by its type.
     * 
     * @param {string} type 
     * @param {object} target 
     * @return {Event}
     */
    find(type, target) {
        return this.events.filter(event => {
            return type === event.type && target === event.target;
        });
    }

    /**
     * Unbind an event of target.
     * 
     * @param {string} type
     * @param {object} target 
     * @returns {Event}
     */
    unbind(type, target) {
        const events = this.find(type, target);

        events.forEach(event => {
            target.removeEventListener(event.type, event.callback, false);
        });

        this.events = this.events.filter(event => !events.includes(event));
        return this;
    }

}