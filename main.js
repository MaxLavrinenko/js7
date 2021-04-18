// - Створити довільний елемент с id = text. використовуючи JavaScript,
// зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
// const pText = document.getElementById('text');
// pText.onclick = (ev => {pText.hidden = true});
// // - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
// const button = document.getElementById('but1');
// button.onclick = (ev => {button.hidden = true});
// // - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// //     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік
// //     чи менше він ніж 18, та повідомити про це користувача
// const input = document.getElementById('inp1');
// const but2 = document.getElementById('but2');
// but2.onclick = (ev=>{
//     input.value < 18 ? alert('тебе меньше 18'): alert('Добро пожаловать !');
// });

// - Створіть меню, яке розгортається/згортається при клику
// const menu1 = document.getElementById('menu');
// const butMenu = document.getElementById('but3');
// let flag = true;
//  butMenu.onclick = (ev=>{
//      menu1.style.display = flag? 'none':'block';
//      flag = !flag;
//
// });

// - Створіть список коментарів , приклад об'єкту коментаря
// - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вивести список коментарів в документ, кожний в своєму блоці.
//     Додайте кожному коментарю по кнопці для згортання його body.
// const comment = [
//     {title : 'lorem1', body:'1lorem ipsum dolo sit ameti', id:1},
//     {title : 'lorem2', body:'2lorem ipsum dolo sit ameti', id:2},
//     {title : 'lorem3', body:'3lorem ipsum dolo sit ameti', id:3},
//     {title : 'lorem4', body:'4lorem ipsum dolo sit ameti', id:4}
// ];
// comment.forEach(value => {
//     const div = document.createElement('div',);
//     const but = document.createElement('button');
//     const h1 = document.createElement('h1');
//     const p = document.createElement('p');
//     but.innerText = 'Hide';
//     h1.innerHTML = `  ${value.title} `;
//     p.innerHTML = `${value.body} `;
//     but.onclick=()=>{ p.hidden = !p.hidden};
//     document.body.appendChild(div);
//     div.appendChild(h1);
//     div.appendChild(p);
//     div.appendChild(but);
// });

// - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться
//      на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
//     Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// const but = document.getElementById('but4');
// but.onclick =(ev => {
//     const form1 = document.forms.form1;
//     const form2 = document.forms.form2;
//     const input1 = form1.input1.value;
//     const input2 = form1.input2.value;
//     const input3 = form2.input3.value;
//     const input4 = form2.input4.value;
//     console.log(input1,input2, input3,input4);
// });


// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
//
// const table = (str,colums)=>{
//     let table = document.createElement('table');
//     table.style.border = 'solid','1px','black';
//     for (let i = 0; i < str; i++) {
//         const tr = document.createElement('tr');
//         for (let j = 0; j < colums; j++) {
//             const td = document.createElement('td');
//             td.innerHTML = `${i+1} : ${j+1}`;
//             td.style.border = 'solid','1px','black';
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//     document.body.appendChild(table);
// }
// table(10,15);

// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.
// const imgArray = [{alt:'num1', url:'./img/number_1.jpg'},{alt:'num2', url:'./img/number_2.jpg'},{alt:'num3', url:'./img/number_3.jpg'}]
// const butLeft = document.getElementById('butLeft');
// const butRight = document.getElementById('butRight');
// const img = document.getElementById('img');
// let index = 0;
// img.src = imgArray[index].url
//     butLeft.onclick = ()=>{
//         if (index - 1 <0){
//             index = imgArray.length;
//         }
//         index = index -1;
//         img.src = imgArray[index].url
//         img.alt = imgArray[index].alt
//     }
// butRight.onclick = ()=>{
//         if (index +1 > imgArray.length -1){
//             index = -1 ;
//         }
//         index = index+1;
//         img.src = imgArray[index].url;
//         img.alt = imgArray[index].alt;
//     }

// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// const input = document.getElementById('in1');
// const but = document.getElementById('but4');
// const matArray = ["Сука","Хер","Жопа"];
// but.onclick=()=>{
//     const text = input.value;
//     for (const arr of matArray) {
//         if(arr === text){
//             alert(" Э але! не надо так!")
//         }
//     }
// }

// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
// const input = document.getElementById('in1');
// const but = document.getElementById('but4');
// const matArray = ["сука","хер","жопа"]
// but.onclick=()=>{
//     const text = input.value;
//     matArray.forEach(arr=>{
//         if(text.includes(arr)){
//             alert(" Э але! не надо так!")
//         }
//     })
//     // ИЛИ ТАК?
//     // for (const arr of matArray) {
//     //     if(text.includes(arr)){
//     //         alert(" Э але! не надо так!")
//     //     }
//     // }
// }

// -- Взяти масив юзерів
const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];
// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ
const maried = document.getElementById('check1');
const older = document.getElementById('check2');
const kiev = document.getElementById('check3');
const but = document.getElementById('but5');
but.onclick = ()=>{
    if(maried.checked === true){
        usersWithAddress.filter(value => {
            if(value.isMarried === false){
                document.write(`${value.name} ${value.isMarried} ${value.age} <br>`);
            }
        });
    }
    if(older.checked === true){
        usersWithAddress.filter(value => {
            if(value.age >= 29){
                document.write(`${value.name} ${value.isMarried} ${value.age} <br>`);
            }
        });
    }
    kiev.checked === true ? usersWithAddress.filter(value => {
        if(value.address.city === 'Kyiv'){
            document.write(`${value.name} ${value.isMarried} ${value.age} <br>`);
        }
    }):0;
}
