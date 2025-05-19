const titleDOM=document.querySelector('title')
const h1DOM=document.querySelector('h1')
h1DOM.textContent='Pomidoras'
h1DOM.style.width='200px'
const title='Pomidoras'

let time=0;

function changeTitle(){
    time++;
    if(time%2===0){
titleDOM.textContent=`Document ${time}`
}else{
   
    titleDOM.textContent=`${title} (${time})`
}
}


const timer= setTimeout(changeTitle,1000);

/*

function changeColor(){

time++
if(time%2===0){
h1DOM.classList.add('zuikio-darzo-error')
}else{
    h1DOM.style.backgroundColor="white"
}
}

setInterval(changeColor,1000);


*/

const liDOM=document.querySelectorAll('li')

const vegetables=['Pomidoras','Agurkas','Svogunas','Bulve']

for(let i=0;i<liDOM.length;i++){
    liDOM[i].textContent=vegetables[i] ? vegetables[i]:"Error"
    
    if(vegetables[i]){
    liDOM[i].style.backgroundColor='green'
    liDOM[i].style.width='200px'
    } else{
    liDOM[i].style.fontSize='5rem'
    liDOM[i].style.width='100px'
    liDOM[i].classList.add('zuikio-darzo-error')
}
}

const titleDOM = document.querySelector('title');
const h1DOM = document.querySelector('h1');
const title = 'Zuikio daržas';

h1DOM.textContent = title;
h1DOM.style.backgroundColor = 'yellow';
h1DOM.style.fontSize = '2rem';

let time = 0;

function changeTitle() {
    time++;


    if (time % 2 === 0) {
        titleDOM.textContent = `Document (${time})`;
    } else {
        titleDOM.textContent = `${title} (${time})`;
    }

    if (time > 6) {
        clearInterval(timer);
    }
}

const timer = setInterval(changeTitle, 1000);

const liListDOM = document.querySelectorAll('li');
const vegetables = ['pomidoras', 'agurkas', 'svogūnas', 'bulvė', 'dobiliukai'];

let index = 0;

for (const liDOM of liListDOM) {
    liDOM.textContent = vegetables[index] ? vegetables[index] : 'error';

    if (vegetables[index]) {
        liDOM.classList.add('zuikio-darzove');
    } else {
        liDOM.classList.add('zuikio-darzo-error');
    }

    index++;
}



