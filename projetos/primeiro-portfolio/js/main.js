navSlide();
typewritter();

document.onscroll = () => {
    if(document.documentElement.scrollTop == 0){
        document.querySelector('nav').classList.remove('onscroll');
    } else{
        document.querySelector('nav').classList.add('onscroll');
    }
}

function navSlide(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.onclick = () => {
        //toggle nav
        nav.classList.toggle('nav-active');
        
        //animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else{
                link.style.animation = `navLinkFade 500ms ease forwards ${index / 5}s`;
            }
        });
        
        //burger animation
        burger.classList.toggle('toggle');
    }
}

function typewritter(){
    const texts = ['Desenvolvedor Front-End'];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';
    
    function type(){
        if(count === TextDecoderStream.length){
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);
        
        document.querySelector('.typewritter').textContent = letter;
        setTimeout(type, 200);
    }
    
    type();
}

const date = new Date();
document.querySelector('.ano-atual').innerHTML = date.getFullYear();