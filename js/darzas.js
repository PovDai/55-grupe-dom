const titleDOM=document.querySelector('title');
const h1DOM=document.querySelector('h1')
h1DOM.textContent='Pomidoras' // priskiriam nauja reiksme tekstui
h1DOM.style.width='200px' // priskiriame nauja didi plotui tiesiogiai.
const title='Pomidoras' // kaip kintamasis kuri galima priskirti kitai reiksmei. 

let time=0;
function changeTitle(){

    time++
    if(time%2===0){
        titleDOM.textContent=`Document ${time}`
    }else{
        titleDOM.textContent=`${title} ${time}`
  if (time > 6) { /// kai pasieks 6 karta sustabdys 
        clearInterval(timer);// taip sustabdome intervalas 
    }
}
}

const timer= setTimeout(changeTitle,1000)

function changeColor(){

    time++
    if(time%2===0){
        h1DOM.classList.add('zuikio-darzo-error')
    }else{
        h1DOM.style.backgroundColor='red'
    }
}
setInterval(changeColor,1000)



const liListDOM = document.querySelectorAll('li');

const vegetables = ['pomidoras', 'agurkas', 'svogūnas', 'bulvė', 'dobiliukai'];

let index = 0; // nes nebuvo jokio indekso. 

for (const liDOM of liListDOM) {
    liDOM.textContent = vegetables[index] ? vegetables[index] : 'error';

    if (vegetables[index]) {
        liDOM.classList.add('zuikio-darzove');
    } else {
        liDOM.classList.add('zuikio-darzo-error');
    }

    index++;// nes reikia kaip per cikla didintu per 1 kaskarta. 
}



const titleDOM = document.querySelector('title');
const h1DOM = document.querySelector('h1');
const title = 'Zuikio daržas';

h1DOM.textContent = title;
h1DOM.style.backgroundColor = 'yellow';
h1DOM.style.fontSize = '2rem';





