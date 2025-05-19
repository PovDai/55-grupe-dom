const mainDOM = document.getElementsByTagName('main');
const h1MainDOM = mainDOM[0].getElementsByTagName('h1');
const firstH1InMain = h1MainDOM[0];

console.log(firstH1InMain.textContent);




const pDOM=document.getElementsByTagName('p')
console.log(pDOM)

for(let i=0;i<pDOM.length;i++){
    const p=pDOM[i];
    p.textContent+='-------'
    console.log(p.textContent)
}



