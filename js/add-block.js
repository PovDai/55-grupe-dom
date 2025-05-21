import { header } from "./header.js";

header();

const btnDOM=document.getElementById('add');
const liDOM=document.querySelector('.block-list');

btnDOM.addEventListener('click',(event)=>{
    event.preventDefault();
    liDOM.innerHTML+=`<div class="block"></div>`
});

