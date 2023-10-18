const resultado = document.querySelector('.resultado h1');
const calculo = document.querySelector('.cal h3');
const buttons = document.querySelectorAll('#botoes button');
const valoresOp = ["*", "+", "-", "/", "."];

function result(re) {

    resultado.innerHTML = re;

}

function expressao(valor) {

    let ultimoCaracter = calculo.innerHTML[calculo.innerHTML.length-1];

    if(valor == "=") {

        result(eval(calculo.innerHTML));
        return

    } else if(valor == "C") {

        calculo.innerHTML = "";
        resultado.innerHTML = "0";
        return

    } else if(valor == "DEL") {

        strCalc.substring(0, calculo.innerHTML.length - 1)
        calculo.innerHTML = calculo.innerHTML.substring(0, calculo.innerHTML.length-1);
        return

    }
    if(valoresOp.includes(valor)) {

        if(calculo.innerHTML == "") {
            return
        } else if(valoresOp.includes(ultimoCaracter)) {
            return;
        } else {
            calculo.innerHTML += valor;
        }

    } else {

        calculo.innerHTML += valor;

    }

}

buttons.forEach((btn) => {

    btn.addEventListener('click', (e) => {
        
        const valor = e.target.innerText;

        if(+valor >= 0 || valor === '.') {
            expressao(valor);
        } else {
            expressao(valor);
        };

    });

});