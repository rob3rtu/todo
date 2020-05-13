const button = document.querySelector('.new');
const checkbox = document.querySelector('.checkbox');
const del = document.querySelector('.delete');
const list = document.querySelector('.list-items');
const bigList = document.querySelector('.big-list-items');

del.addEventListener('click', ()=> {
    const parent = document.getElementById('delOriginal').parentElement;
        parent.remove();
});

cnt = 0;

button.addEventListener('click', ()=> {
    cnt++;
    //div
    const div = document.createElement('div');

    //donePic
    const donePic = document.createElement('img');
    donePic.src = 'Design/Vector.svg';
    donePic.classList.add('done');

    //checkbox
    const checkboxClone = document.createElement('img');
    checkboxClone.src = 'Design/checkbox.png';
    checkboxClone.classList.add('checkbox');

    checkboxClone.addEventListener('click', ()=> {
        const divParent = checkboxClone.parentElement;
        const childrens = divParent.children;

        childrens[2].classList.toggle('done-element');
        childrens[0].classList.toggle('done-active');
    });

    //form
    const form = document.createElement('form');
    form.setAttribute('onsubmit', 'return false');

    //text
    const input = document.createElement('input');
    input.setAttribute('autocomplete', 'off');
    input.setAttribute('placeholder', 'Type your things...');
    input.setAttribute('type', 'text');
    input.setAttribute('autofocus', '');

    //add text to form
    form.appendChild(input);


    //delete    
    const delClone = document.createElement('img');
    delClone.src = 'Design/delete.svg';
    delClone.id = 'id' + cnt;
    const delId = 'id' + cnt;

    delClone.addEventListener('click', ()=> {
        const parent = document.getElementById(delId).parentElement;
        parent.remove();
        
    });


    //formez div
    div.classList.add('list-elements');
    div.appendChild(donePic);
    div.appendChild(checkboxClone);
    div.appendChild(form);
    div.appendChild(delClone);


    //adaug div
    bigList.insertBefore(div, document.querySelector('.first-element'));
    div.classList.add('first-element');

    //make form works
    form.addEventListener('submit', ()=> {
        const text = document.createElement('h2');
        text.innerHTML = input.value;

        const parent1 = form.parentElement;
        parent1.insertBefore(text, delClone);

        form.remove();
    });
});

checkbox.addEventListener('click', ()=> {
    const parent2 = checkbox.parentElement;
    const childrens2 = parent2.children;

    childrens2[0].classList.toggle('done-active');
    childrens2[2].classList.toggle('done-element');
});