import {headeris} from"./headeris.js";
headeris();
const btnDOM=document.querySelector('.click-me button')
const pDOM=document.querySelector('.click-me p')

pDOM.textContent=0
let click=0;
function addOne(){
   
    pDOM.textContent=click

    click++
}
btnDOM.addEventListener('click',addOne)



