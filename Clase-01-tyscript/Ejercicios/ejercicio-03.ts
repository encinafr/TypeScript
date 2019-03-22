



 let Primos = function BuscarPrimos(a: number):number{
    for(var j=2;j < a ;j++)
    {
        
    }
   return 0;
 }
   

//console.log(numerosPrimos);

function primo(numero:number) {

  for (var i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}