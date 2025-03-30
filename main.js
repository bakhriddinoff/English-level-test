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

btnblack.addEventListener('click', function() { 
    main.style.backgroundColor = 'black';
    main.style.color = 'rgb(24, 206, 206)';
    links.forEach(link => {
        link.style.color = 'rgb(24, 206, 206)';
    });
    right.forEach(rightElement => { // right elementlari ro'yxatini aylanib chiqish
        rightElement.style.backgroundColor = 'white';
    });

    btnblack.style.border = '3px solid white';
    btnblack.style.color = 'rgb(24, 206, 206)';
    hero1.style.backgroundColor = 'rgb(0, 9, 46)';
    hero2.style.backgroundColor = 'rgb(0, 9, 46)';
    hero3.style.backgroundColor = 'rgb(0, 9, 46)';
    let allTextElements = document.querySelectorAll('*'); // Hamma elementlarni olish
    allTextElements.forEach(el => {
        el.style.color = 'white';
    });
    section1.style.backgroundColor = 'rgb(0, 9, 46)';
    section2.style.backgroundColor = ' rgb(0, 9, 46)';
    section3.style.backgroundColor = ' rgb(0, 9, 46)';
    section4.style.backgroundColor = ' rgb(0, 9, 46)';
    section5.style.backgroundColor = ' rgb(0, 9, 46)';
    section6.style.backgroundColor = ' rgb(0, 9, 46)';
    footer.style.backgroundColor = 'black';
})

// btnwhite.addEventListener('click', function() {
//     main.style.backgroundColor = 'rgb(24, 206, 206)';
//     main.style.color = 'black';
//     h2.forEach(h2 => {
//         h2.style.color = 'rgb(24, 206, 206)';
//     })
//     links.forEach(link => {
//         link.style.color = '#131b1b';
//     });
//     btnblack.style.border = '3px solid black';
//     btnblack.style.color = 'black';
//     right.forEach(rightElement => { // right elementlari ro'yxatini aylanib chiqish
//         rightElement.style.backgroundColor = 'white';
//     });

//     btnblack.style.border = '3px solid white';
//     btnblack.style.color = 'rgb(24, 206, 206)';
//     hero1.style.backgroundColor = 'rgb(0, 9, 46)';
//     hero2.style.backgroundColor = 'rgb(0, 9, 46)';
//     hero3.style.backgroundColor = 'rgb(0, 9, 46)';
//     let allTextElements = document.querySelectorAll('*'); // Hamma elementlarni olish
//     section1.style.backgroundColor = 'white';
//     section2.style.backgroundColor = 'white';
//     section3.style.backgroundColor = 'white';
//     section4.style.backgroundColor = 'white';
//     section5.style.backgroundColor = 'white';
//     section6.style.backgroundColor = 'white';
//     footer.style.backgroundColor = 'rgb(0, 9, 46)';

// })

function getAllCssColors() {
    let colors = new Set(); // Takrorlanmas ranglar uchun Set ishlatamiz

    for (let sheet of document.styleSheets) {
        try {
            for (let rule of sheet.cssRules) {
                if (rule.style) {
                    for (let prop of rule.style) {
                        let value = rule.style.getPropertyValue(prop);
                        if (value.startsWith('rgb') || value.startsWith('#')) {
                            colors.add(value);
                        }
                    }
                }
            }
        } catch (e) {
            // Xatolikni e'tiborsiz qoldiramiz, chunki ba'zi qoidalar xavfsizlik sababli o'qilmaydi.
        }
    }
    return Array.from(colors); // Setni massivga o'tkazamiz
}