// Hover effects of Menu Buttons
let link = document.querySelectorAll('.a');
link.forEach((elem) => {
    elem.addEventListener('mouseover', ()=>{
        elem.style.color = '#478BF9';
    })
    elem.addEventListener('mouseout', ()=>{
        elem.style.color = '#ffffff';
    })
});

// Lenguage and Login Buttons
let header = document.querySelector('.header');

    let form = document.createElement('form');
    form.classList.add('form');
    header.append(form);

        let engBut = document.createElement('button');
        engBut.classList.add('btn','btn_en');
        form.appendChild(engBut);
        engBut.innerHTML = '<ion-icon name="globe"></ion-icon>EN'

        let logBut = document.createElement('button');
        logBut.classList.add('btn', 'log_but');
        form.appendChild(logBut);
        logBut.innerHTML = 'LOG IN'

        let sigBut = document.createElement('button');
        sigBut.classList.add('btn','btn_sign');
        form.appendChild(sigBut);
        sigBut.innerHTML = 'SIGN UP'


// Toggle Menu Button
const togBut = document.createElement('div');
togBut.classList.toggle('toggle_but');
const togLine = document.createElement('div');
togLine.classList.toggle('toggle_line');
togBut.append(togLine);

// Media Query
const nav = document.querySelector('.nav');
let menu = document.querySelector('.ul');

function klik() {
    nav.style.display = 'none';
        togBut.addEventListener('click', ()=>{
        if (nav.style.display == 'none') {
            nav.style.display = 'block';  
        }
        else{
            nav.style.display = 'none'; 
        }
    });
}

const x = window.matchMedia("(max-width: 999px)");
x.addEventListener('change', foo); 

function foo(screen){
    if (screen.matches) {
        menu.append(logBut, sigBut);
        form.appendChild(togBut);
        engBut.innerHTML = '<ion-icon name="globe"></ion-icon>';
        klik();
    }
    else{
        form.append(logBut, sigBut);
        form.removeChild(togBut);
        engBut.innerHTML = '<ion-icon name="globe"></ion-icon>EN';
        nav.style.display = 'block';
    }
};
foo(x);


