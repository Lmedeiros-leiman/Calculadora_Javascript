

var limite = 10000;


for (var x = 0; x <= limite; x++) 
{
    
    if (x % 2 == 0) 
    {
        console.log
        (
            
            "else if (numero == "+x+" ) \n" +
            "{\n" +
            "var documento = document.getElementsByTagName('body');\n"+
            "documento.innerHTML = numero +' é par'.;\n" +
            "}"
            
        );

    }
    else
    {

        console.log
        (
            
            "else if (numero == "+x+" ) \n" +
            "{\n" +
            "var documento = document.getElementsByTagName('body');\n"+
            "documento.innerHTML = numero +' é impar'.;\n" +
            "}"
            
        );


    }
    


}

