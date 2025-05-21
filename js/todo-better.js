import {headeris} from"./headeris.js";
headeris();

const h1DOM = document.querySelector('h1');
const formDOM = document.forms[0];
const inputDOM = document.getElementById('task');
const listDOM = document.querySelector('.list');

let count = 0;
let deletedCount = 0;

formDOM.addEventListener('submit', event => {
    event.preventDefault();

    listDOM.insertAdjacentHTML('afterbegin', `
        <div class="item">
            <div class="header">
                <div class="index">${++count}</div>
                <button class="btn" type="button">Edit</button>
                <button class="btn" type="button">Delete</button>
            </div>
            <div class="content">${inputDOM.value}</div>
        </div>`);

    inputDOM.value = '';
    inputDOM.focus();
    
    const editBtnDOM=document.querySelector('.btn');
    const deleteBtnDOM = document.querySelector('.btn:last-child');

    editBtnDOM.addEventListener('click',()=>{
        editBtnDOM.parentNode.parentNode.remove();

    })

    deleteBtnDOM.addEventListener('click', () => {
        deleteBtnDOM.parentNode.parentNode.remove();
        deletedCount++;
        h1DOM.textContent = `Task planner (${count - deletedCount})`;
    });

    h1DOM.textContent = `Task planner (${count - deletedCount})`;
});