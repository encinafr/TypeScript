<?php

    // var_dump($_GET);
     $accion = $_GET['accion'];
     $nombre = $_GET['name'];
    if($accion==2)
    {
        // echo $_GET['accion'];
        if(Agregar($nombre)){
            echo "1";
        }
    }
    else{

        if($accion==3)
        {
            // echo( "<table border=1>");
            // echo("<tr>
            //         <th>Nombres</th>
            //     </tr>");

            $fp =fopen("Nombres.txt","r");
            while(!feof($fp))
            {
                $file = fgets($fp);
            echo("<h1>$file</h1><br>");
            }
            
            fclose($fp);
        

        }

    }
    

    function Agregar($nombre)
    {
        $fp =fopen("Nombres.txt","r");
            while(!feof($fp))
            {
                $file = fgets($fp);
                if($file==$nombre)
                {
                    echo("2");
                }

            }
            
            fclose($fp);


        $fp = fopen("Nombres.txt","a");
        $ok = fwrite($fp,$nombre."\r\n");
        if($ok >0)
        {
         return true;
        }
        fclose($fp);
    }

 ?>