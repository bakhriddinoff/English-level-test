let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')
let button3 = document.getElementById('button3')

let hero1 = document.getElementById('hero1')
let hero2 = document.getElementById('hero2')
let hero3 = document.getElementById('hero3')


button1.addEventListener('click', function() {
    hero1.style.left='0';
    hero2.style.left='-150%'
    hero3.style.left='-150%'
});

button2.addEventListener('click', function() {
    hero1.style.left='-150%'
    hero2.style.left='0';
    hero3.style.left='-150%'
});

button3.addEventListener('click', function() {
    hero1.style.left='-150%';
    hero2.style.left='-150%'
    hero3.style.left='0';
});
