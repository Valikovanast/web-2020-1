let page = 20;
let key = '?api_key=9a808d71-78a9-419e-8d5c-5ed4274f7cff';
function hosting(id) {
    return `http://exam-2020-1-api.std-900.ist.mospolytech.ru/api/data1?api_key=9a808d71-78a9-419e-8d5c-5ed4274f7cff/${id}`;//для определенной записи
}

let host = 'http://exam-2020-1-api.std-900.ist.mospolytech.ru/api/data1';

let resources = {
    init: function () {
        this.selection();
    },
    selection: function () {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', host, true);
        xhr.onload = function () {
            let adm = JSON.parse(xhr.responseText).map(Area => { return Area.admArea; });//массив по рез-ам вызова
            (change(adm)).forEach(element => {
                let area = document.createElement('option');
                area.innerHTML = `${String(element)}`;
                document.getElementById('area').append(area);
            });
            let district = JSON.parse(xhr.responseText).map(District => { return District.district; });
            (change(district)).forEach(element => {
                let district = document.createElement('option');
                district.innerHTML = `${String(element)}`;
                document.getElementById('district').append(district);
            });
            let type = JSON.parse(xhr.responseText).map(Type => { return Type.typeObject; });
            (change(type)).forEach(element => {
                let typ = document.createElement('option');
                typ.innerHTML = `${String(element)}`;
                document.getElementById('type').append(typ);
            });
            let web = JSON.parse(xhr.responseText).map(Web => { return Web.isNetObject; });
            (change(web)).forEach(element => {
                let web = document.createElement('option');
                web.innerHTML = `${String(element)}`;
                document.getElementById('web').append(web);
            });
            let discounts = JSON.parse(xhr.responseText).map(Discounts => { return Discounts.socialDiscount; });
            (change(discounts)).forEach(element => {
                let discounts = document.createElement('option');
                discounts.innerHTML = `${String(element)}`;
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
    }
    return arr;
}

function NewRecord(records) {
    let t = document.getElementById('records').querySelector('tbody');
    for (record of records) {
        t.append(inputRecord(record));
    }
}
function inputRecord(records) {
    let row;
    let td;
    row = document.createElement('tr');
    row.id = record.id;
    td = document.createElement('td');
    td.innerHTML = record.name;
    row.append(td);
    td = document.createElement('td');
    td.innerHTML = record.isNetObject;
    row.append(td);
    td = document.createElement('td');
    td.innerHTML = record.operatingCompany;
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
    td.innerHTML = record.seatsCount;
    row.append(td);
    td = document.createElement('td');
    td.innerHTML = record.socialPrivileges;
    row.append(td);
    td = document.createElement('td');
    td.innerHTML = record.publicPhone;
    row.append(td);
    td = document.createElement('td');
    td.innerHTML = record.created_at;
    row.append(td);
    td = document.createElement('td');
    td.innerHTML = record.updated_at;
    row.append(td);
    return row;
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
function UpdatingRec(records) {

}

function renderRecordies(records) {
    let t = document.getElementById('recordies').querySelector('tbody');
    let row;
    let td;
    let btn;
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
        td = document.createElement('td');
        btn = document.createElement('button');
        btn.dataset.recordid = record.id;
        btn.innerHTML = 'del';
        btn.classList.add('btn');
        btn.classList.add('btn-danger');
        btn.dataset.toggle = "modal";
        btn.dataset.target = "#modalis";
        td.append(btn);
        btn = document.createElement('button');
        btn.dataset.recordid = record.id;
        btn.innerHTML = 'inf';
        btn.classList.add('btn');
        btn.classList.add('btn-light');
        btn.dataset.toggle = "modal";
        btn.dataset.target = "#infmodal";
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
        td = document.createElement('td');
        btn = document.createElement('button');
        btn.innerHTML = 'add';
        btn.classList.add('btn-light');
        td.append(btn);
        row.append(td);
        t.append(row);
    }
}

function Menue(records) {
    let menu = document.getElementById('menu').querySelector('div .col-sm-6');
    let h;
    let p;
    for (record of records) { }
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

window.onload = function () {
    let url = new URL(host);
    sendRec(url, 'GET', function () {
        renderRecords(this.response);
    })
    sendRec(url, 'GET', function () {
        renderRecordies(this.response);
    })

    let url_r = new URL(hosting);
    sendRec(url_r, 'GET', function () {
    })

    document.getElementById('btnofSend').onclick = function () {
        let url = new URL(host);
        let params = new FormData(document.getElementById('forms'));
        sendRec(url, 'PUT', function () {
            UpdatingRec(params);
        })
    }

    document.getElementById('create').onclick = function () {
        let url = new URL(key, host);
        let params = new FormData(document.getElementById('formation'));
        sendRecord(url, 'POST', function () {
            document.getElementById('records').querySelector('tbody').append(sendRecord(this.response));
        }, params);
    }
    document.getElementById('saving').onclick = function () {
        let url = new URL(key, host);
        let params = new FormData(document.getElementById('creating'));
        sendRecord(url, 'POST', function () {
            document.getElementById('recordies').querySelector('tbody').append(inputRecord(this.response));
        }, params);
    }
    document.getElementById('delete').onclick = function () {
        let url = new URL(hosting(event.target.dataset.recordid));
        let params = new FormData(document.getElementById('deletef'));
        sendRecord(url, 'DELETE', function () {
            document.getElementById(this.response).remove();
        }, params);
    }
}