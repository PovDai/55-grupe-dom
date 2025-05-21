import { header } from"./header.js";
header();


const formDOM=document.querySelector('form')
const btnDOM=formDOM.querySelector('button'); /// galima tiesiai is formos pasiimti ne is document, jeigu turime forma. 
const inputDOM=formDOM.querySelector('input');
const listDOM=document.querySelector('.todo-list')

// kai turime forma, galima padaryti tiesiogiai nuo formos ir ne click bus o sumbit nes mygtuko toks type.
let count=1;
formDOM.addEventListener('submit', event=>{// reikia rasyti 'submit' nes toks mygtuko tipas
    event.preventDefault(); // kad neveiktu defaultas atnaujinimas 
    if(inputDOM.value.trim()===""){ /// kai tuscias tekstas nieko negrazina. jeigu parasai tada atsiranda. trimu() isvalom tustuma
        return;
    }
     listDOM.innerHTML+= `<div class="todo-item">
    <p>${count++}</p>
    <p>${inputDOM.value} </p>  
    </div>`;
    inputDOM.value=''; /// kai reikia parasius istrinti eilute kad butu galima vel rasyti. 
    // inputDOM.value // reikalingas kad irasys i inputa kazka jis sugeneruotu ta teksta ir dar skaiciu kelinta eilute. 
});



