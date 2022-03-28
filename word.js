let check = document.querySelector(".btn");


check.addEventListener("click", btnClicked);

function highlight_words(elem, regex) {

    elem.innerHTML = elem.innerHTML.replace(regex, '<span>$&</span>');
}

function highlight_word(num) {
    var par = document.querySelector('p');
    var highlight = par.innerHTML.split(/[\s,]+/)
        .map(word => word.length <= num ? `<span>${word}</span>` : word)
        .join(' ');
    par.innerHTML = highlight;
}

function creatPar() {
    var par = document.createElement('p');
    var inp = document.querySelector('.words').value;
    par.innerHTML = inp;
    par.classList.add('highlight');
    var div = document.getElementById('word');
    div.appendChild(par);
}

function hideWords() {
    var checked = document.querySelector("input[name='hide']:checked");
    if (checked) {
        var par = document.querySelector('p').textContent;
        par = par.replace(/\b\w{1,4}\b[ \t]*/sg, "");
        document.querySelector('p').innerHTML = par;
        highlight_words(document.querySelector('p'), /[a-zA-Z]{5,}/g)
    }
}

function btnClicked() {
    creatPar();
    highlight_word(document.getElementById("range").value)
    hideWords()
}

function rangeSlide(value) {
    document.getElementById('rangeValue').innerHTML = value;
}