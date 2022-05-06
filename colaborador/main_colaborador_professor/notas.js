const text = document.querySelector('.title_text');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for(let i=0; i<splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}


let char = 0
let timer = setInterval(onTick,50);


function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char === splitText.length){
        complete();
        return;
    }
}


function complete(){
    clearInterval(timer);
    timer = null;
}

function consultarNota(){
    var nota1=document.getElementById("nota1").value;
    var nota2=document.getElementById("nota2").value;
    var nota3=document.getElementById("nota3").value;

    alert('numero 1 é ' + nota1);
    alert('numero 2 é ' + nota2);
    alert('numero 3 é ' + nota3);
        var soma = parseInt(nota1) + parseInt(nota2) + parseInt(nota3);
    alert('a soma é ' + soma);
        var media = soma / 3;
    alert('A media é ' + media);
    
}
