

let array = [{ name: 'Макар', age: 20 },
{ name: 'Роберт', age: 32 },
{ name: 'Екатерина', age: 50 },
{ name: 'Оксана', age: 24 },
{ name: 'Святослав', age: 43 }];
let key = prompt('Ввведите как сортировать name/age', 'age');
function getSortedArray(array, key) {
    let arr = [];

    function sor(key) {
        return (a, b) => a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0;
    }
    if (key == 'name') {
        arr = array.sort(sor('name'));
    }
    else if (key == 'age') {
        arr = array.sort(sor('age'));
    }
    return arr;
}
array = getSortedArray(array, key);
console.log(array);










