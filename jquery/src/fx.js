'use strict';

class Fx {

    /**
     * Sets opactity of element.
     * 
     * @param {object} elem 
     * @param {number} level 
     */
    static setOpacity(elem, level) {
        if (level >= 0 && level <= 100) {
            elem.style.opacity = level / 100;
        }

        return this;
    }

    /**
     * Hide the matched elements by fading them to transparent.
     * 
     * @param {object} elem 
     * @param {int} duration 
     */
    static fadeOut(elem, duration) {
        let level = 100;

        const interval = setInterval(() => {
            this.setOpacity(elem, --level);

            if (level === 0) {
                clearInterval(interval);
            }

        }, duration / 100);

        return this;
    }

    /**
     * Display the matched elements by fading them to opaque.
     * 
     * @param {object} elem 
     * @param {int} duration 
     */
    static fadeIn(elem, duration) {
        let level = 0;

        const interval = setInterval(() => {
            this.setOpacity(elem, ++level);

            if (level === 100) {
                clearInterval(interval);
            }

        }, duration / 100);
    }

}