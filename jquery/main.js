
let $ = function (selector) {
    return {
        text: function (str) {
            document.querySelector(selector).textContent = str;
        },

        on: function (evt, f) {
            document.querySelector(selector).addEventListener(evt, f, false);
        }
    }
};


const title = document.querySelector('h1');
title.text();

$(title).text('Hello World');

$('h1').text('Hello World');

$('h1').on('click', evt => {
    alert('My Super lib');
});


