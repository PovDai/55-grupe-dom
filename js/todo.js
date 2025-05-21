import {header} from"./header.js";
header();

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


const form1DOM=document.forms[1];
const input1DOM=document.getElementById('task1');
const btn1DOM=form1DOM.querySelector('button');
const list1DOM=document.querySelector('.list1');
const h11DOM=document.querySelectorAll('h1');
const h12DOM=h11DOM[1];
let laikrodis=0;
let minus=0;
form1DOM.addEventListener('submit',(event)=>{
    event.preventDefault();
   
    list1DOM.innerHTML=`<div class="item1">
                <div class="header1">
                    <div class="index1">${laikrodis}</div>
                    <button class="btn1" type="button">Delete</button>
                </div>
                <div class="content1">${input1DOM.value}</div>
            </div> `+list1DOM.innerHTML;
     input1DOM.value='';

     
laikrodis ++;
input1DOM.focus();
const deletebtnDOM=document.querySelectorAll('.btn1')

for(const mygtukasDOM of deletebtnDOM){
    mygtukasDOM.addEventListener('click',()=>{
        mygtukasDOM.parentNode.parentNode.remove();

        minus++
        h12DOM.textContent=`Cia rezultatas ${laikrodis-minus}`
    })
    h12DOM.textContent=`Cia rezultatas ${laikrodis-minus}`
}

})



