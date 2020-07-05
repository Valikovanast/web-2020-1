function record(id){
    return `api/datal/${id}`;
}

let host='';
let record='api/datal';

function downloadInf(page=1){
    let choice= document.querySelector('.choice');
    let url= new URL(choice.dataset.URL);
    let xhr= new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType= 'json';
    xhr.onload= function(){

    }
    xhr.send();
}

function sendRec(method, url){
    let xhr = new XMLHttpRequest();
    xhr.open(method,url);
    xhr.responseType='json';
    xhr.onload= onloadHandler;
    xhr.send();
}
window.onload= function(){
    document.getElementById('');
    downloadInf();
}