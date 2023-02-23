// Создать каунтер. Страница с двумя кнопками “+” и “-” и при нажатии на
// какую-либо число должно меняться в соответствующую сторону. Значение counter не должно слетать при перезагрузке страницы.

const form = document.querySelector('form')
const input = document.querySelector('#number');
const plusBtn = document.querySelector('.plus');
const minusBtn = document.querySelector('.minus');

form.onsubmit = (e) =>{
    e.preventDefault();
}

plusBtn.onclick = () => {
    input.value++;
    localStorage.setItem('nr', input.value);

};

minusBtn.onclick = () => {
    input.value--;
    localStorage.setItem('nr', input.value);
};

//что бы не слетало помле перезагрузки
const info = localStorage.getItem('nr');
input.value = info;

