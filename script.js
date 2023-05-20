const btnPrev = document.getElementById('btn__prev');
const btnNext = document.getElementById('btn__next');
const num1 = document.getElementById('num1');

var contar = 0;

btnNext.onclick = function () {
    contar++;
    
    if (contar == 0) {
        num1.classList.remove('num');
        num1.classList.add('numBlue')
    }
}


