const botoes = [7,8,9,4,5,6,1,2,3,0,".","="];
const comandos = ["+","-","**","*","/","√","(",")","Anterior","Remover","Resetar"];
var contador = 0;
var resultadoanterior = 0;
var linharesultadotexto = document.getElementById("linharesultado");
var resultado = document.getElementById("mostrarresultado");
var apagar = 0;

function criarnovalinha(id)
{
    var novalinha = document.createElement("tr");
    novalinha.className = "membrocalculadora";
    var corpomesa = document.getElementById(id);
    
    corpomesa.append(novalinha);
}


botoes.forEach(element => {cadastrararray("CORPOMESABOTOES",element)})
comandos.forEach(element => {cadastrararray("CORPOMESACOMANDOS",element)})

function cadastrararray(id,element) {
    
    var linhasmesa = document.getElementsByClassName("membrocalculadora");
    var novacelula = document.createElement("td");
    var novobotao = document.createElement("button");
    
    
    if (contador >= 3 || linhasmesa.length == 0) { criarnovalinha(id); contador = 0;}

    novacelula.append(novobotao);
    
    novobotao.innerHTML = element;
    
    var nomeclasse = element;
    if (nomeclasse == "=") { nomeclasse = "totalizar";}
    
    novobotao.className = nomeclasse;

    switch (element)
    {
        case "Resetar":
            novobotao.addEventListener("click",function(){resetarlista()});
        break;
        
        case "Remover":
            novobotao.addEventListener("click",function(){removerlista()});
        break;
        
        case "=":
            novobotao.addEventListener("click",function(){totalizar(element)});
        break;
        
        default:
            novobotao.addEventListener("click",function(){adicionarlista(element)});
        break;
    }
    
    

    contador++; 
    linhasmesa[linhasmesa.length - 1].append(novacelula); 
    
}
function adicionarlista(element) 
{ 
    if (apagar == 1) 
    { 
        
        resetarlista();
        apagar = 0;
        linharesultadotexto.style.color = "Gray";
    }
    if (element == "Anterior") {element = resultadoanterior}
    if (element == "√") { element = "Math.sqrt("}
    linharesultadotexto.innerHTML += element;
   // atualizarlinha(element);

}
function removerlista() 
{
   
   linharesultadotexto.innerHTML = linharesultadotexto.innerHTML.slice(0,-1);

}
function resetarlista() 
{
    linharesultadotexto.innerHTML = "";
   
}

function totalizar() 
{
    let userInput = linharesultadotexto.innerHTML;
    let result = Function("return " + userInput)(); // which is same as "return 2+4"
    resultado.innerHTML = result
    linharesultadotexto.style.color = "gray"
    apagar = 1;
    resultadoanterior = result;
    //var texto = document.getElementById("mostrarresultado").innerHTML.toString();
    //texto = linharesultadotexto.innerHTML.toString();

    
    //console.log(linharesultadotexto.innerHTML);
    
}


//
//onkeydown = checartecla(KeyboardEvent);
//function checartecla(elemento) {console.log("checando tecla: " +elemento)}

