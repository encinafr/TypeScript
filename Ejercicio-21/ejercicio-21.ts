function Calcular(): string
{
    let validación: any = document.getElementsByName("operaciones");
    let txt="";

    var i;
    for (i = 0; i < validación.length; i++) {
        if (validación[i].checked) {
            txt = validación[i].value;
            // break;
        }
    }

    return txt;
}

function CalcularOperacion(): void
{
    let resultado: number = 0;
    let operacion: string = Calcular();
    alert(`test${operacion}test`);

    let primerOperando: string = (<HTMLInputElement> document.getElementById("txtNum1")).value;
    let auxPrimerOperando: number = parseInt(primerOperando, 10);

    let segundoOperando: string = (<HTMLInputElement> document.getElementById("txtNum2")).value;
    let auxSegundoOperando: number = parseInt(segundoOperando, 10);

    if(isNaN(auxPrimerOperando))
    { auxPrimerOperando = 0;}
    if(isNaN(auxSegundoOperando))
    { auxSegundoOperando = 0;}
    
    switch (operacion) {
        case `+`:
        {
            resultado=auxPrimerOperando+auxSegundoOperando;
            break;
        }
        case `-`:
        {
            resultado=auxPrimerOperando-auxSegundoOperando;
            break;
        }
        case `*`:
        {
            resultado=auxPrimerOperando*auxSegundoOperando;
            break;
        }
        default:
        {
            resultado=auxPrimerOperando/auxSegundoOperando;
            break;
        }
    }
    alert(`El resultado es ${resultado}`);
}