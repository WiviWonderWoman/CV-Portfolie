'use strict';
let arrGit = [];

fetch('https://api.github.com/users/WiviWonderWoman/repos')
.then(resp => resp.json())
.then(data => gitHub(data))


function gitHub(data) {
    (data);
    arrGit = data;
    console.log(arrGit);
    arrGit.forEach(element => {
        // document.getElementById('github').insertAdjacentHTML ("afterbegin", `<button id="knapp"></button>`);
        document.getElementById('github').insertAdjacentHTML("afterbegin",`<a href=`+element.html_url+`target="_blank">`+element.name+`</a>`)
        
    }); 
}  


 // console.log(element.html_url);
 // console.log(element.name);       

