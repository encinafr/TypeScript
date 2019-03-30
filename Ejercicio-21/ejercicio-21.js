function Calcular() {
    var validación = document.getElementsByName("operaciones");
    var txt = "";
    var i;
    for (i = 0; i < validación.length; i++) {
        if (validación[i].checked) {
            txt = validación[i].value;
            // break;
        }
    }
    return txt;
}
function CalcularOperacion() {
    var resultado = 0;
    var operacion = Calcular();
    alert("test" + operacion + "test");
    var primerOperando = document.getElementById("txtNum1").value;
    var auxPrimerOperando = parseInt(primerOperando, 10);
    var segundoOperando = document.getElementById("txtNum2").value;
    var auxSegundoOperando = parseInt(segundoOperando, 10);
    if (isNaN(auxPrimerOperando)) {
        auxPrimerOperando = 0;
    }
    if (isNaN(auxSegundoOperando)) {
        auxSegundoOperando = 0;
    }
    switch (operacion) {
        case "+":
            {
                resultado = auxPrimerOperando + auxSegundoOperando;
                break;
            }
        case "-":
            {
                resultado = auxPrimerOperando - auxSegundoOperando;
                break;
            }
        case "*":
            {
                resultado = auxPrimerOperando * auxSegundoOperando;
                break;
            }
        default:
            {
                resultado = auxPrimerOperando / auxSegundoOperando;
                break;
            }
    }
    alert("El resultado es " + resultado);
}
