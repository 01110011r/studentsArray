const students = [{ id: 1, name: 'Alice', grade: 'A' }, { id: 2, name: 'Bob', grade: 'C' }, { id: 3, name: 'Charlie', grade: 'B' }, { id: 4, name: 'Dave', grade: 'A' }, { id: 5, name: 'Eve', grade: 'B' }, ];

const input = document.querySelector('#input');
const searchBtn = document.querySelector('.search');
const box = document.querySelector('.box');


function myFun(parametr) {
    const arId = [];
    for (const iterator of parametr) {
        arId.push(iterator.id)
    }
    console.log(arId);
    searchBtn.addEventListener('click', () => {
        const x = Number(input.value);
        if (arId.includes(x)) {
            return box.innerHTML = `<div class="box__item">
                    <span>ID: ${parametr[x-1].id}</span>
                    <span>Name: ${parametr[x-1].name}</span>
                    <span>Grade: ${parametr[x-1].grade}</span>
                </div>`;
        } else { return box.innerHTML = `<div class="box__item">
        <span>Aniqlanmadi !!!</span>
    </div>`; }
    })
}
console.log(myFun(students));