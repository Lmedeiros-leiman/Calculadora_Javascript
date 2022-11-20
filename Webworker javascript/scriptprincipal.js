
var botaoparar = document.getElementById("BOTAOPARAR");
var botaocomecar = document.getElementById("BOTAOCOMECAR");
var textomensagem = document.getElementById("CONTADOR");
var contador = 0;
var trabalhador;
function esconderbotaoparar()
{
    botaoparar.style.display = "none";
    botaocomecar.style.display = "inline-block";

}
function mostrarbotao()
{
    botaoparar.style.display = "inline-block";
    botaocomecar.style.display = "none";

}
function iniciarcontagem()
{
    mostrarbotao();
    //trabalhador.postMessage("continuar");
    
}
function pararcontagem()
{
    //trabalhador.postMessage("pausar");
    esconderbotaoparar();
    


}
function relogializarnumero(numero) 
{
    if (numero < 60) { return numero + " Segundos";}
    else
    {
        
        var minutos = Math.floor(numero/60) ;
        var horas = Math.floor(minutos/3600);
        var segundos = numero - (minutos * 60 + horas * 3600);

        if (horas == 0) { return minutos +":"+ segundos +" Minutos"}
        
        return horas +":"+ minutos +":"+ segundos +" Horas";

    }
}

function iniciarprograma()
{
    if (typeof(Worker) !== "undefined") 
        {
        if (typeof(trabalhador) == "undefined")
            {
                trabalhador = new Worker("contador.js");
            }
           
         
	webworker.onmessage = function(event) {
 		var tempo = event.data;
                textomensagem.innerHTML = "Voce esta gastando seu tempo... <br> Tempo gasto até agora: <br>"+ relogializarnumero(tempo);
            
    console.log("Message from worker:", event.data); // ["foo", "bar", "baz"]
}
            trabalhador.addEventListener("message", function(event) {
               
            });
    
    }
    else
        {
            textomensagem.innerHTML = "Seu navegador não possui suporte aos trabalhadores...";
            botaocomecar.style.display = "none";
        }
}


onload = iniciarprograma();
