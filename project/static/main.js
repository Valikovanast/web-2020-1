let page = 20;
function hosting(id) {
    return `http://exam-2020-1-api.std-900.ist.mospolytech.ru/api/data1/${id}`;//для определенной записи
}

let host = 'http://exam-2020-1-api.std-900.ist.mospolytech.ru/api/data1';

function Deliterec(event) {
    let url = new URL(hosting(event.target.dataset.recordid), host);
    sendRecord(url, 'DELETE', function () {
        document.getElementById(this.response).remove();
    });
}

let resources = {
    init: function () {
        this.selection();
    },
    selection: function () {
        let i = 1;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', host, true);
        xhr.onload = function () {
            let admArea = JSON.parse(xhr.responseText).map(Area => { return Area.admArea; });
            (change(admArea)).forEach(element => {
                let area = document.createElement('option');
                area.innerHTML = `${String(element)}`;
                area.setAttribute('value', i); i++;
                document.getElementById('area').append(area);
            });
            let district = JSON.parse(xhr.responseText).map(District => { return District.district; });
            (change(district)).forEach(element => {
                let district = document.createElement('option');
                district.innerHTML = `${String(element)}`;
                district.setAttribute('value', i); i++;
                document.getElementById('district').append(district);
            });
            let type = JSON.parse(xhr.responseText).map(Type => { return Type.typeObject; });
            (change(type)).forEach(element => {
                let typ = document.createElement('option');
                typ.innerHTML = `${String(element)}`;
                typ.setAttribute('value', i); i++;
                document.getElementById('type').append(typ);
            });
            let web = JSON.parse(xhr.responseText).map(Web => { return Web.isNetObject; });
            (change(web)).forEach(element => {
                let web = document.createElement('option');
                web.innerHTML = `${String(element)}`;
                web.setAttribute('value', i); i++;
                document.getElementById('web').append(web);
            });
            let discounts = JSON.parse(xhr.responseText).map(Discounts => { return Discounts.socialDiscount; });
            (change(discounts)).forEach(element => {
                let discounts = document.createElement('option');
                discounts.innerHTML = `${String(element)}`;
                discounts.setAttribute('value', i); i++;
                document.getElementById('discounts').append(discounts);
            });


        }
        xhr.send();
    }
}

resources.init();

function change(array) {
    let arr = [];

    for (let str of array) {
        if (!arr.includes(str)) {
            arr.push(str);
        }
        delete ('null');
    }
    return arr;
}

function inputRecord(records) {
    let row;
    let td;
    let btn;
    row = document.createElement('tr');
    row.id = record.id;
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
    btn = document.createElement('button');
    btn.dataset.recordid = record.id;
    btn.innerHTML = 'del';
    btn.classList.add('btn');
    btn.classList.add('btn-danger');
    td.append(btn)
    row.append(td);
    return row;
}
function newRec(records) {
    let t = document.getElementById('recordies').querySelector('tbody');
    t.innerHTML = '';
    for (record of records) {
        t.append(inputRecord(record));
    }
}


/*function RenderPagination(info) {
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
}*/

function GetRec(event){
    let url;
    sendRecord(url,'PUT', function(){

    } )
}

function renderRecordies(records) {
    let t = document.getElementById('recordies').querySelector('tbody');
    let row;
    let td;
    let btn;
    let a;
    for (record of records) {
        row = document.createElement('tr');
        row.id = record.id;
        td = document.createElement('td');
        td.innerHTML = record.name;
        row.append(td);
        td = document.createElement('td');
        td.innerHTML = record.typeObject;
        row.append(td);
        td = document.createElement('td');
        td.innerHTML = record.address;
        row.append(td);
        td= document.createElement('td');
        btn = document.createElement('button');
        btn.dataset.recordid = record.id;
        btn.innerHTML = 'del';
        btn.classList.add('btn');
        btn.classList.add('btn-danger');
        btn.dataset.toggle="modal";
        btn.dataset.target="#modalis";
        btn.onclick=Deliterec;
        td.append(btn);
        btn=document.createElement('button');
        btn.dataset.recordid=record.id;
        btn.innerHTML='inf';
        btn.classList.add('btn');
        btn.classList.add('btn-light');
        btn.dataset.toggle="modal";
        btn.dataset.target="#infmodal";
        td.append(btn);
        btn=document.createElement('input');
        btn.type="radio";
        td.append(btn);
        row.append(td);
        t.append(row);
    }
}


function renderRecords(records) {
    let t = document.getElementById('records').querySelector('tbody');
    let row;
    let td;
    let btn;
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
        td=document.createElement('td');
        btn=document.createElement('button');
        btn.innerHTML='add';
        btn.classList.add('btn-light');
        td.append(btn);
        row.append(td);
        t.append(row);
    }
}

function sendRec(url, method, loading) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';
    xhr.onload = loading;
    xhr.send();
}

function sendRecord(url, method, loading, params) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';
    xhr.onload = loading;
    xhr.send(params);
}
function Menue(records) {
    let menu = document.getElementById('menu').querySelector('div').forEach();

}

window.onload = function () {
    let url = new URL(host);
    sendRec(url, 'GET', function () {
        renderRecords(this.response);
    })
    sendRec(url, 'GET', function () {
        renderRecordies(this.response);
    })
/* document.getElementById('btnofSend').onclick = function () {
     let url = new URL(host);
     let params = new FormData(document.getElementById('forms'));
     sendRecord(url, 'POST', function () {
         document.getElementById('records').querySelector('tbody').append(sendRecord(this.response));
     }, params);
 }*/
}
