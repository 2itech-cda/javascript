'use strict';

class Utils {

    static isFunction(value) {
        return value && {}.toString.call(value) === '[object Function]';
    }

    static isObject(value) {
        return !Array.isArray(value) && value === Object(value);
    }

    static isString(value) {
        return typeof value === 'string' || value instanceof String;
    }

}