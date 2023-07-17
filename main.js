function tocaSom (seletorAudio) {
   const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
         //alert ('Elemento não encontrado');
          console.log('Elemento não encontrado ou seletor inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');



for (let indice = 0; indice < listaDeTeclas.length; indice++) {
    const tecla = listaDeTeclas[indice];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
   
    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    
    tecla.onkeydown = function (evento) {
        if(evento.code === "Enter" || evento.code === "Space") {
        tecla.classList.add('ativa');
        }
      }
      tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
      }
}

/* outra opção para utilizar

let contador = 0;

while (contador = listaDeTeclas.length) {
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    contador = contador + 1;

    console.log(contador);

}
*/ 