const btnPrev = document.getElementById('btn__prev');
const btnNext = document.getElementById('btn__next');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const num4 = document.getElementById('num4');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');

var contar = 1;

btnNext.onclick = function () {
    
    if (contar == 1) {
        btnPrev.classList.remove('btn__gray');
        btnPrev.classList.add('btn');
        num2.classList.remove('num');
        num2.classList.add('numBlue');
        line1.classList.remove('line');
        line1.classList.add('lineBlue');
        contar++;
    } else if (contar == 2) {
        num3.classList.remove('num');
        num3.classList.add('numBlue');
        line2.classList.remove('line');
        line2.classList.add('lineBlue');
        contar++;
    } else if (contar == 3) {
        num4.classList.remove('num');
        num4.classList.add('numBlue');
        line3.classList.remove('line');
        line3.classList.add('lineBlue');
        btnNext.classList.remove('btn');
        btnNext.classList.add('btn__gray');
        contar++;
    } 
}

btnPrev.onclick = function () {
    
    if (contar == 4) {
        btnNext.classList.add('btn');
        btnNext.classList.remove('btn__gray');
        num4.classList.add('num');
        num4.classList.remove('numBlue');
        line3.classList.add('line');
        line3.classList.remove('lineBlue');
        contar--;
    } else if (contar == 3) {
        num3.classList.add('num');
        num3.classList.remove('numBlue');
        line2.classList.add('line');
        line2.classList.remove('lineBlue');
        contar--;
    } else if (contar == 2) {
        num2.classList.add('num');
        num2.classList.remove('numBlue');
        line1.classList.add('line');
        line1.classList.remove('lineBlue');
        btnPrev.classList.remove('btn');
        btnPrev.classList.add('btn__gray');
        contar--;
    } 
}


