const contador = document.querySelector('.cont');
const add1 = document.querySelector('.add1');
const add5 = document.querySelector('.add5');
const remove1 = document.querySelector('.remove1');
const dinheiro = document.querySelector('.dinheiro');

let salgados = 0;
let valor = 0;

document.onclick = (e) => {
    if(e.target.classList.value == 'add1'){
        attNumeros(1);
    } else if(e.target.classList.value == 'add5'){
        attNumeros(5);
    } else if(e.target.classList.value == 'remove1'){
        if(valor == 0){
            return;
        } else{
            attNumeros(-1);
        }
    }
}

function attNumeros(cont){
    valor += 4.50 * cont;
    salgados += cont;
    contador.innerHTML = salgados;
    dinheiro.innerHTML = valor;
}