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

/* SCRIPT DE AULAS */

let aulas = [
    // primeiro bimestre
    { bimestre: "1", materia: 'Língua Inglesa', aulas: 1},
    { bimestre: "1", materia: 'Língua Portuguesa',aulas: 3 },
    { bimestre: "1", materia: 'Matemática', aulas: 4},
    { bimestre: "1", materia: 'Física', aulas: 4},
    { bimestre: "1", materia: 'Língua Espanhola', aulas: 2},
    { bimestre: "1", materia: 'Biologia', aulas: 3},
    { bimestre: "1", materia: 'Educação Física', aulas: 1},
    { bimestre: "1", materia: 'Artes', aulas: 1 },
    { bimestre: "1", materia: 'Geografia', aulas: 2},
    { bimestre: "1", materia: 'História', aulas: 2},
    // segundo bimestre
    { bimestre: "2", materia: 'Língua Inglesa', aulas: 1},
    { bimestre: "2", materia: 'Língua Portuguesa',aulas: 3 },
    { bimestre: "2", materia: 'Matemática', aulas: 4},
    { bimestre: "2", materia: 'Física', aulas: 4},
    { bimestre: "2", materia: 'Língua Espanhola', aulas: 2},
    { bimestre: "2", materia: 'Biologia', aulas: 3},
    { bimestre: "2", materia: 'Educação Física', aulas: 1},
    { bimestre: "2", materia: 'Artes', aulas: 1 },
    { bimestre: "2", materia: 'Geografia', aulas: 2},
    { bimestre: "2", materia: 'História', aulas: 2},
    // terceiro bimestre
    { bimestre: "3", materia: 'Língua Inglesa', aulas: 1},
    { bimestre: "3", materia: 'Língua Portuguesa',aulas: 3 },
    { bimestre: "3", materia: 'Matemática', aulas: 4},
    { bimestre: "3", materia: 'Física', aulas: 4},
    { bimestre: "3", materia: 'Língua Espanhola', aulas: 2},
    { bimestre: "3", materia: 'Biologia', aulas: 3},
    { bimestre: "3", materia: 'Educação Física', aulas: 1},
    { bimestre: "3", materia: 'Artes', aulas: 1 },
    { bimestre: "3", materia: 'Geografia', aulas: 2},
    { bimestre: "3", materia: 'História', aulas: 2},
    // quarto bimestre
    { bimestre: "4", materia: 'Língua Inglesa', aulas: 1},
    { bimestre: "4", materia: 'Língua Portuguesa',aulas: 3 },
    { bimestre: "4", materia: 'Matemática', aulas: 4},
    { bimestre: "4", materia: 'Física', aulas: 4},
    { bimestre: "4", materia: 'Língua Espanhola', aulas: 2},
    { bimestre: "4", materia: 'Biologia', aulas: 3},
    { bimestre: "4", materia: 'Educação Física', aulas: 1},
    { bimestre: "4", materia: 'Artes', aulas: 1 },
    { bimestre: "4", materia: 'Geografia', aulas: 2},
    { bimestre: "4", materia: 'História', aulas: 2},
  ];
  
  function gerarCabecalhoTabela(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
  
  function gerarCorpoTabela(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
  
  function limparTela() {
    const tableTag = document.querySelectorAll('table');
    tableTag.forEach(function(table) {
      table.innerHTML = "";
    }); 
}

  function filtroPeriodoSelecionadoAulas() {
    limparTela()
    let table = document.querySelector("table");
    let value = document.getElementById("filtro_periodo").value
    let data = Object.keys(aulas[0]);
  
    var aulas_bimestre =  aulas.filter(function(aulas) {
      return value == "0" ? aulas : aulas.bimestre == value;
  });
    gerarCabecalhoTabela(table, data);
    gerarCorpoTabela(table, aulas_bimestre);


  }


/* FIM SCRIPT DE Aulas */