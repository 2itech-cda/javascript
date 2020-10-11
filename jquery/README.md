# Jquery

## Getting Started

``` js
$(document).ready(() => {
    $('li').even().addClass('yourClass').text('Hello World');

    $('h1').on('click', function () {
        $(this).css('color', 'red');
        $('li').last().fadeOut(3000);
    });
});
```

## API

### .addClass(className)

``` js
$('div').addClass('class1', 'class2');
```

### .append(html)

``` js
$('div').append('<div>some content</div>');
```

### .check()

``` js
$('input[type=checkbox]').check();
```

### .css()

``` js
$('div').css('color', 'royalblue');

// or

$('div').css({
    color: 'royalblue',
    width: '100px'
});
```

### .debug()

``` js
$('div').debug();
```

### .even()

``` js
$('li').even();
```

### .fadeIn(duration)

``` js
$('div').fadeIn(5000);
```

### .fadeOut(duration)

``` js
$('div').fadeOut(5000);
```

### .filter()

``` js
$('input').filter(elem => elem.type === 'text');
```

### .first()

``` js
$('li').first();
```

### .forEach()

``` js
$('li').forEach(elem => elem.style.color = 'orangered');
```

### .last()

``` js
$('li').last();
```

### .odd()

``` js
$('li').odd();
```

### .off()

``` js
$('li').off('click');
```

### .on()

``` js
$('li').on('click', event => {
    console.log(event.target);
});

// or

$('li').on('click', function () {
    console.log(this);
});
```

### .prepend(html)

``` js
$('div').prepend('<div>some content</div>');
```

### .ready()

``` js
$(document).ready(() => {
    // do something
});
```

### .removeClass(className)

``` js
$('li').removeClass('class1', 'class2');
```

### .text(value)

``` js
$('div').text(value);
```

### .toggleClass(className)

``` js
$('div').toggleClass('yourClass');
```

### .setValues()

``` js
$('input').setValues({
    firstName: 'john',
    lastName: 'Doe'
});
```

### .getValues()

``` js
$('input').getValues();
```



