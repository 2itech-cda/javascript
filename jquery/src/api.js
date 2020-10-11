'use strict';

class Api {

    constructor() {
        this.elems = [];
        this.event = new Event();
    }

    addClass(...className) {
        return this.forEach(elem => elem.classList.add(...className));
    }

    append(html) {
        return this.forEach(elem => elem.innerHTML = elem.innerHTML + html);
    }

    check() {
        return this.forEach(elem => {
            if (elem.type && (elem.type === 'checkbox' || elem.type === 'radio')) {
                elem.setAttribute('checked', '');
            }
        });
    }

    css(property, value = '') {
        if (Utils.isString(property)) {
            return this.forEach(elem => elem.style[property] = value);
        }

        if (Utils.isObject(property)) {
            return this.forEach(elem => {
                for (let p in property) {
                    elem.style[p] = property[p];
                }
            });
        }

        return this;
    }

    debug() {
        console.log(this.elems);
        return this;
    }

    even() {
        return this.filter((_elem, index) => index % 2 === 0);
    }

    fadeIn(duration) {
        return this.forEach(elem => Fx.fadeIn(elem, duration));
    }

    fadeOut(duration) {
        return this.forEach(elem => Fx.fadeOut(elem, duration));
    }

    filter(callback) {
        this.elems = this.elems.filter(callback);
        return this;
    }

    first() {
        return this.filter((_elem, index) => index === 0);
    }

    forEach(callback) {
        this.elems.forEach(callback);
        return this;
    }

    last() {
        return this.filter((_elem, index) => index === this.elems.length - 1);
    }

    odd() {
        return this.filter((_elem, index) => index % 2 === 1);
    }

    off(event) {
        return this.forEach(elem => this.event.unbind(event, elem));
    }

    on(type, callback) {
        return this.forEach(elem => this.event.bind(type, callback, elem));
    }

    prepend(html) {
        return this.forEach(elem => elem.innerHTML = html + elem.innerHTML);
    }

    ready(callback) {
        if (this.elems.length && this.elems[0] instanceof Document) {
            this.on('DOMContentLoaded', callback);
        }
    }

    removeClass(...className) {
        return this.forEach(elem => elem.classList.remove(...className));
    }

    text(value) {
        return this.forEach(elem => elem.textContent = value);
    }

    toggleClass(className) {
        return this.forEach(elem => elem.classList.toggle(className));
    }

    query(selector) {
        if (Utils.isObject(selector)) {
            this.elems = [selector];
            return this;
        }

        this.elems = [...document.querySelectorAll(selector)];
        return this;
    }

    setValues(obj) {
        return this.forEach(elem => {
            if (elem.value && elem.name && obj.hasOwnProperty(elem.name)) {
                elem.value = obj[elem.name];
            }
        });
    }

    getValues() {
        const values = {};

        this.forEach(elem => {
            if (elem.value && elem.name) {
                values[elem.name] = elem.value;
            }
        });

        return values;
    }

}