import {headeris} from"./headeris.js";
headeris();
const formDOM=document.forms[0];/// paieska tiesiogiai formose. 
const inputDOM=document.getElementById('task');
const listDOM=document.querySelector('.list');
const h1DOM=document.querySelector('h1');

let count=0;
let deletedcount=0;

formDOM.addEventListener('submit',event => {
 event.preventDefault();

listDOM.innerHTML = `<div class="item">
                <div class="header">
                    <div>${count}</div>
                    <button class='btn' type="button">Delete</button>
                </div>
                <div class="content">${inputDOM.value}</div>
                <div class="content"></div>
        </div>
      </div>` +listDOM.innerHTML; /// jeigu norime kad nauji elementai eitu i virsu ne i apacia.tada taip apkeiciam.

inputDOM.value='';
inputDOM.focus();

count++

const deleteBtnListDOM=document.querySelectorAll('.btn') // SUSIRANDAM MYGTUKA PER SELECTORIU. 

for(const btnDOM of deleteBtnListDOM){ // EINAME PER JO CIKLA , NES GALI BUTI PRIGENERUOTA PVZ 100 JU. 
    btnDOM.addEventListener('click',()=>{ // DAROM ADDEVENTLISTENER ('CLICK' )
        btnDOM.parentNode.parentNode.remove();
         deletedcount++;

         h1DOM.textContent=`Task planer (${count-deletedcount})`     /// jeigu norime kad trinimo metu iskarto atsinaujuntu.                               /// panaikina tevo teva ir istrina.
    });

h1DOM.textContent=`Task planer (${count-deletedcount})`
}
});



