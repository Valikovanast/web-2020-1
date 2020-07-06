let page = 20;
function record_path(id) {
    return `/api/data1/${id}`;//для определенной записи
}

let host = 'http://exam-2020-1-api.std-900.ist.mospolytech.ru';
let records_path = '/api/data1';//общий

function createBtn(pages, classes = []) {
    let btn = document.createElement('button');
    classes.push('btn');
    for (cls of classes) {
        btn.classList(cls);
    }
    btn.dataset.page = page;
    btn.innerHTML = page;
    return btn;
}
function selectData() {

}

function inputRecord(record) {

}

function pageBtnHandler(e){

}
function Addsets(){


}

function AddingElements(records){
    let form = document.querySelector('forms'); 
    let selection;
    let option;
    for(record of records){
    selection= document.getElementById('area');
    option= document.createElement('option');
    option.innerHTML=record.admArea;
    selection.append(option);
    selection= document.getElementById('district');
    option=document.createElement('option');
    option.innerHTML=record.district;
    selection.append(option);
    selection= document.getElementById('type');
    option=document.createElement('option');
    option.innerHTML=record.typeObject;
    selection.append(option);
    selection= document.getElementById('sales');
    option=document.createElement('option');
    option.innerHTML=record.socialPrivileges;
    selection.append(option);
    }
    

}

function RenderPagination(info){
    let btn;
    let pagination = document.querySelector('.pagination');
    pagination.innerHTML = '';

    btn = createPageBtn(1, ['first-page-btn']);
    btn.innerHTML = 'Первая страница';
    if (info.current_page == 1) {
        btn.style.visibility = 'hidden';
    }
    pagination.append(btn);


    btn = createPageBtn(info.total_pages, ['last-page-btn']);
    btn.innerHTML = 'Последняя страница';
    if (info.current_page == info.total_pages) {
        btn.style.visibility = 'hidden';
    }
    pagination.append(btn);
}
/*function DeliteRecord(e){
    let modal=document.getElementById('modal');
    if(e.target)

}*/

function renderRecordies(records) {
    let t = document.getElementById('recordies').querySelector('tbody');
    let row;
    let td;
    for (record of records) {
        row = document.createElement('tr');
        td = document.createElement('td');
        td.innerHTML = record.name;
        row.append(td);
        td = document.createElement('td');
        td.innerHTML = record.typeObject;
        row.append(td);
        td = document.createElement('td');
        td.innerHTML = record.address;
        row.append(td);
        td=document.createElement('button');
        //let icon= document.createElement('i');
        //icon.id='delete';
        //td.append(icon);
        //td.onclick= DeliteRecord();
        row.append(td);
        t.append(row);
    }
}


function renderRecords(records) {
    let t = document.getElementById('records').querySelector('tbody');
    let row;
    let td;
    for (record of records) {
        row = document.createElement('tr');
        td = document.createElement('td');
        td.innerHTML = record.name;
        row.append(td);
        td = document.createElement('td');
        td.innerHTML = record.typeObject;
        row.append(td);
        td = document.createElement('td');
        td.innerHTML = record.admArea;
        row.append(td);
        td = document.createElement('td');
        td.innerHTML = record.district;
        row.append(td);
        td = document.createElement('td');
        td.innerHTML = record.address;
        row.append(td);
        td = document.createElement('td');
        td.innerHTML = record.rate;
        row.append(td);
        td = document.createElement('td');
        td.innerHTML = record.socialPrivileges;
        row.append(td);
        t.append(row);
    }
}

function sendRec(url, method, onloadHandler, params) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';
    xhr.onload = onloadHandler;
    xhr.send();
}
window.onload = function () {
    let url = new URL(records_path, host);
    sendRec(url, 'GET', function () {
        renderRecords(this.response);
    })
    sendRec(url, 'GET', function () {
        renderRecordies(this.response);
    })
    sendRec(url,'GET',function(){
        AddingElements(this.resconse);
    })

    document.getElementById('btnofSend').onclick = function () {
        let url = new URL(records_path, host);
        let params = new FormData(document.getElementById('formation'));
        sendRec(url, 'POST', function () {
            inputRecord(this.resconse);
        })
    }
}
