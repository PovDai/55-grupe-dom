import {header} from "./header.js";

header();

const titleDOM=document.querySelector('title');
const h1DOM=document.querySelector('h1');


let time=0;
function change(){
time++;
if(time%2===0){
    titleDOM.textContent=`Pimidoras ${time}`
    h1DOM.style.backgroundColor='red'

}else{
    titleDOM.textContent=`Document ${time}`
    h1DOM.style.backgroundColor='green'

}if(time>30){
    clearInterval(timer);
}

}
const timer=  setInterval(change,1000);


const vegetables=['Agurkai','Bulves','Svogunai','Laiskai']

const listDOM=document.querySelectorAll('li');
console.log(listDOM);
let index = 0;

for (const liDOM of listDOM) {
    liDOM.textContent = vegetables[index] ? vegetables[index] : 'error';

    if (vegetables[index]) {
        liDOM.classList.add('zuikio-darzove');
    } else {
        liDOM.classList.add('block');
        liDOM.insertAdjacentHTML('afterend',`<p>sadsdasdasdasdsadasd<p>`)
        liDOM.innerHTML='Sveiki gyvi';
    }
    index++;
}
const inputDOM=document.querySelector('input')
const pDOM=document.querySelector('p');
const btnDOM=document.querySelector('.button')


let count=0;
btnDOM.addEventListener('click',()=>{
     pDOM.insertAdjacentHTML('beforebegin',`   ${pDOM.textContent=count}`)
    pDOM.innerHTML+=`<div class="block">
                <p >${count}</p>
                <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, sequi.</p>
            </div>`

    count++
})







