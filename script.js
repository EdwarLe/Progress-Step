const btnPrev = document.getElementById('btn__prev');
const btnNext = document.getElementById('btn__next');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const num4 = document.getElementById('num4');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');

var contar = 0;

btnNext.onclick = function () {
    
    if (contar == 0) {
        num2.classList.remove('num');
        num2.classList.add('numBlue');
        line1.classList.remove('line');
        line1.classList.add('lineBlue')
    } else if (contar == 1) {
        num3.classList.remove('num');
        num3.classList.add('numBlue');
        line2.classList.remove('line');
        line2.classList.add('lineBlue')
    } else if (contar = 2) {
        num4.classList.remove('num');
        num4.classList.add('numBlue');
        line3.classList.remove('line');
        line3.classList.add('lineBlue')
    }

    contar++;
    console.log(contar)
}


