const input = document.querySelector('input');
const submit = document.querySelector('button');
const ol = document.querySelector('ol');

submit.addEventListener('click', ()=> {
    if (input.value === '') {
        alert('please enter data');
    }
    else{
    const newli = document.createElement('li');

    const del = document.createElement('h4');
    del.innerText = 'D';
    del.classList.add('input.value');
    newli.innerText = input.value;
    newli.append(del)
    ol.append(newli);
    input.value = '';
    }
})