var quotes = ['hey its me ur brother',
    'the pain slowly fades, but the love is forever',
    'i have always been thirsty for knowledge',
    'far better is it to dare mighty things, to win glorious triumphs, even though checkered by failure... than to rank with those poor spirits who neither enjoy nor suffer much, because they live in a gray twilight that knows not victory nor defeat',
    'the wind is still rising'];

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#footer').innerHTML += "\"" + quotes[Math.floor(Math.random() * quotes.length)] + "\""
});