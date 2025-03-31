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

let btnblack = document.getElementById('btn-black')
let btnwhite = document.getElementById('btn-white')
let main = document.querySelector('main')
let links = document.querySelectorAll('.link2')
let right = document.querySelectorAll('.right')
let section1 = document.querySelector('.section1')
let section2 = document.querySelector('.section2')  
let section3 = document.querySelector('.section3')
let section4 = document.querySelector('.section4')
let section5 = document.querySelector('.section5')
let section6 = document.querySelector('.section6')
let footer = document.querySelector('footer')
let h2 = document.querySelectorAll('h2')
let herojon = document.getElementById('herojon')
let p = document.querySelectorAll('p')
let h3 = document.querySelectorAll('h3')
let linkwrapper = document.querySelector('.link-wrapper')
let textjon = document.querySelectorAll('.textF')
let h4 = document.querySelectorAll('h4')

btnblack.addEventListener('click', function() { 
    main.style.backgroundColor = 'black';
    main.style.color = 'rgb(24, 206, 206)';
    right.forEach(rightElement => { // right elementlari ro'yxatini aylanib chiqish
        rightElement.style.backgroundColor = 'white';
    });
    h2.forEach(h2 => {
        h2.style.color = 'white';
    })
    h3.forEach(h3 => {
        h3.style.color = 'white';
    })
    linkwrapper.style.color = 'white';
    btnblack.style.border = '3px solid white';
    btnblack.style.color = 'white';
    hero1.style.backgroundColor = 'rgb(0, 9, 46)';
    hero2.style.backgroundColor = 'rgb(0, 9, 46)';
    hero3.style.backgroundColor = 'rgb(0, 9, 46)';
    p.forEach(el => {
        el.style.color = 'white';
    });
    links.forEach(link => {
        link.style.color = 'rgb(24, 206, 206)';
    });
    section1.style.backgroundColor = 'rgb(0, 9, 46)';
    section2.style.backgroundColor = ' rgb(0, 9, 46)';
    section3.style.backgroundColor = ' rgb(0, 9, 46)';
    section4.style.backgroundColor = ' rgb(0, 9, 46)';
    section5.style.backgroundColor = ' rgb(0, 9, 46)';
    section6.style.backgroundColor = ' rgb(0, 9, 46)';
    h4.forEach(h4 => {
        h4.style.color = 'white';
    })

    footer.style.backgroundColor = 'black';
})



let heading1 = document.querySelectorAll('.heading1')

btnwhite.addEventListener('click', function() {
    main.style.backgroundColor = 'rgb(24, 206, 206)';
    main.style.color = 'black';
    linkwrapper.style.color = 'white';
    h2.forEach(h2 => {
        h2.style.color = 'black';
    })
    links.forEach(link => {
        link.style.color = '#131b1b';
    });
    p.forEach(p => {
        p.style.color = 'black';
    })
    heading1.forEach(heading1 => {  
        heading1.style.color = 'White';
    })
    textjon.forEach(textjon => {
        textjon.style.color = 'white';
    })
    btnblack.style.border = '3px solid black';
    btnblack.style.color = 'black';
    
    herojon.style.backgroundColor = 'rgb(0, 9, 46)';
    btnblack.style.border = '3px solid white';
    btnblack.style.color = 'white';
    hero1.style.backgroundColor = 'rgb(24, 206, 206)';
    hero2.style.backgroundColor = 'rgb(24, 206, 206)';
    hero3.style.backgroundColor = 'rgb(24, 206, 206)';
    section1.style.backgroundColor = 'white';
    section2.style.backgroundColor = 'white';
    section3.style.backgroundColor = 'white';
    section4.style.backgroundColor = '#F2F1F0';
    section5.style.backgroundColor = 'white';
    section6.style.backgroundColor = 'white';
    footer.style.backgroundColor = 'rgb(0, 9, 46)';

})

