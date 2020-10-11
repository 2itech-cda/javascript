(function () {

    const api = new Api();

    window.$ = selector => {
        return api.wrap(selector);
    };

}());

// $('li').even().css('background-color', 'yellow');
// $('li').odd().css('background-color', 'pink');
// $('li').css('color', 'white');
// $('li').text('Hello, World');

// $('li').on('click', evt => alert('Event fired'));
// $('li').off('click');

$('h1').setOpacity(0);

$('body').on('click', evt => {
    $('h1').fadeIn(1000);
});
