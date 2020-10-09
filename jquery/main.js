(function () {

    window.$ = selector => {
        return new Api(selector);
    };

}());

$('li').even().css('background-color', 'yellow');
$('li').odd().css('background-color', 'pink');
$('li').css('color', 'white');
$('li').text('Hello, World');
