const formDOM=document.forms[0];/// paieska tiesiogiai formose. 
const inputDOM=document.getElementById('task');
const listDOM=document.querySelector('.list');

let count=0;
formDOM.addEventListener('submit',event => {
 event.preventDefault();
listDOM.innerHTML +=`<div class="item">
                <div class="header">
                    <div>${count}</div>
                    <button class='btn' type="button">Delete</button>
                </div>
                <div class="content">${inputDOM.value}</div>
                <div class="content"></div>
        </div>
      </div>`
 inputDOM.value='';
count++
const deleteBtnListDOM=document.querySelectorAll('.btn') // SUSIRANDAM MYGTUKA PER SELECTORIU. 

for(const btnDOM of deleteBtnListDOM){ // EINAME PER JO CIKLA , NES GALI BUTI PRIGENERUOTA PVZ 100 JU. 
    btnDOM.addEventListener('click',()=>{ // DAROM ADDEVENTLISTENER ('CLICK' )
        btnDOM.parentNode.parentNode.remove();/// panaikina tevo teva ir istrina.
    });
}
});



