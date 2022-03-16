let check = document.querySelector(".btn");

check.addEventListener("click", btnClicked);

function highlight_words(elem, regex) {
    [].forEach.call(elem, function(ele) {
        ele.innerHTML = ele.innerHTML.replace(regex, '<span>$&</span>');
    })

}

function creatPar() {
    var par = document.createElement('p');
    var inp = document.querySelector('.words').value;
    par.innerHTML = inp;
    par.classList.add('highlight');
    var div = document.getElementById('word');
    div.appendChild(par);
}

function btnClicked() {
    creatPar();
    highlight_words(document.querySelectorAll('p'), /[a-zA-Z]{5,}/g);
}let check = document.querySelector(".btn");

check.addEventListener("click", btnClicked);

function highlight_words(elem, regex) {
    [].forEach.call(elem, function(ele) {
        ele.innerHTML = ele.innerHTML.replace(regex, '<span>$&</span>');
    })

}

function creatPar() {
    var par = document.createElement('p');
    var inp = document.querySelector('.words').value;
    par.innerHTML = inp;
    par.classList.add('highlight');
    var div = document.getElementById('word');
    div.appendChild(par);
}

function btnClicked() {
    creatPar();
    highlight_words(document.querySelectorAll('p'), /[a-zA-Z]{5,}/g);
}