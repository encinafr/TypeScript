namespace AJAX{

    export function saludar()
    {
       let  obtener :XMLHttpRequest = new XMLHttpRequest();
        obtener.open('GET','administrar.php',true);
        obtener.send();
        obtener.onreadystatechange = ()=>{
            if(obtener.readyState == 4 && obtener.status ==200)
            {
                alert(obtener.responseText);
                console.log(obtener.responseText);
                let nombre:string = (<HTMLInputElement>document.getElementById('nombre')).value;
               // alert(obtener.responseText);
            }
        }

        // alert('Hola mnundo AJAX');
        // console.log('Hola mnundo AJAX');

    }

    export function Ingresar()
    {
        let  obtener :XMLHttpRequest = new XMLHttpRequest();
        let nombre:string = (<HTMLInputElement>document.getElementById('nombre')).value;
        if(verificar(nombre)){
            alert('El nombre ya existe');
        }
        obtener.open('GET',"administrar.php?accion=2&name="+nombre,true);

        obtener.send();
        obtener.onreadystatechange = ()=>{
            if(obtener.readyState == 4 && obtener.status==200)
            {
                if(obtener.responseText =="1"){
                     mostrar();
                    // alert("Lego")
                }
                // alert(obtener.responseText);
                // console.log(obtener.responseText);
            
               // alert(obtener.responseText);
            }
        }
    }

    function mostrar()
    {
        let  obtener :XMLHttpRequest = new XMLHttpRequest();
        let nombre:string = (<HTMLInputElement>document.getElementById('nombre')).value;
        obtener.open('GET',"administrar.php?accion=3",true);

        obtener.send();
        obtener.onreadystatechange = ()=>{
            if(obtener.readyState == 4 && obtener.status==200)
            {
                alert(obtener.responseText);
                (<HTMLDivElement>document.getElementById("nombre")).innerHTML = obtener.responseText;
            }
    
               // alert(obtener.responseText);
         }
    }

    //verificar si el nombre existe o no
    function verificar(nombre:string):boolean
    {
        let  obtener :XMLHttpRequest = new XMLHttpRequest();
       // let nombre:string = (<HTMLInputElement>document.getElementById('nombre')).value;
        obtener.open('GET',"administrar.php?accion=4&name="+nombre,true);

        obtener.send();
        obtener.onreadystatechange = ()=>{
            if(obtener.readyState == 4 && obtener.status==200)
            {
                if(obtener.responseText==="2")
                {
                    return true;
                }
                
             
            }
    
               // alert(obtener.responseText);
         }
         return false;
    }

}