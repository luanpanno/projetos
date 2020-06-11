const nav = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const links = nav.querySelectorAll('a');

burger.onclick = () => {
    nav.classList.toggle('nav-open');
    burger.classList.toggle('toggle');
}

links.forEach(link => {
    link.onclick = () => {
        nav.classList.toggle('nav-open');
        burger.classList.toggle('toggle');
    }
})