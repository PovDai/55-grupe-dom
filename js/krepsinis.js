import { header } from './header.js';
header();

const appDOM = document.getElementById('app');

appDOM.innerHTML = `
    <div class="board">
        <div class="team">
            <div class="result">0</div>
            <p class="home">Namai</p>
            <div class="actions">
                <button type="button">+1</button>
                <button type="button">+2</button>
                <button type="button">+3</button>
            </div>
        </div>
        <div class="team">
            <div class="result">0</div>
            <p class="away">Svečiai</p>
            <div class="actions">
                <button type="button">+1</button>
                <button type="button">+2</button>
                <button type="button">+3</button>
            </div>
        </div>
    </div>
    <div class="history">
        <div class="entry home">Pirma komanda pelne 1 taska.</div>
        <div class="entry away">Antra komanda pelne 3 taskus.</div>
    </div>
`;

const [homeResultDOM,awayResultDOM]=appDOM.querySelectorAll('.result');
const [home1DOM,home2DOM,home3DOM,away1,away2,away3]=appDOM.querySelectorAll('button');
const historyDOM=appDOM.querySelector('.history');


let homeScore=0;
let awayScore=0;


home1DOM.addEventListener('click',()=>{
    homeScore+=1;
    homeResultDOM.textContent=homeScore
    historyDOM.insertAdjacentHTML('afterbegin',`<div class="entry home">Namu komanda pelne 1 taska.</div>`)

})
home2DOM.addEventListener('click',()=>{
    homeScore+=2;
    homeResultDOM.textContent=homeScore
    historyDOM.insertAdjacentHTML('afterbegin',`<div class="entry home">Namu komanda pelne 2 taska.</div>`)

})
home3DOM.addEventListener('click',()=>{
    homeScore+=3;
    homeResultDOM.textContent=homeScore
    historyDOM.insertAdjacentHTML('afterbegin',`<div class="entry home">Namu komanda pelne 3 taska.</div>`)

})



away1.addEventListener('click',()=>{
    awayScore+=1;
   awayResultDOM.textContent=awayScore
   historyDOM.insertAdjacentHTML('afterbegin',`<div class="entry away">Sveciu komanda pelne 1 taska.</div>`)

})
away2.addEventListener('click',()=>{
  awayScore+=2;
    awayResultDOM.textContent=awayScore
     historyDOM.insertAdjacentHTML('afterbegin',`<div class="entry away">Sveciu komanda pelne 2 taska.</div>`)

})
away3.addEventListener('click',()=>{
     awayScore+=3;
    awayResultDOM.textContent=awayScore
     historyDOM.insertAdjacentHTML('afterbegin',`<div class="entry away">Sveciu komanda pelne 3 taska.</div>`)

})