var textocorfundo = document.getElementById("TEXTOCORFUNDO");
var root = document.querySelector(':root');
var RGBbarras = [255,255,255];

function trocarcoraleatorio() {
definircor(numeroaleatorio(),numeroaleatorio(),numeroaleatorio());
pegarcor();
}
function pegarcor() 
{
var valor = getComputedStyle(root);
textocorfundo.innerHTML = valor.getPropertyValue("--corfundopadrao");

}
function definircor(r=255,g=255,b=255) 
{
    
    var novacortextoarray = [r,g,b];
    var novacortexto = checarcores(novacortextoarray);
    
    
    var novacor = "rgb("+r+","+g+","+b+")";
    var novacortexto = "rgb("+novacortexto[0]+","+novacortexto[1]+","+novacortexto[2]+")";
    
    
    root.style.setProperty("--corfundopadrao", novacor)
    root.style.setProperty("--cortextofundopadrao",novacortexto )

}
function numeroaleatorio(minimo = 0, maximo = 255) 
    {
        return Math.floor(Math.random() * (maximo - minimo) ) + minimo;
    }
function checarcores(cores) 
{
    for (var i = 0; i < cores.length;i++) 
    {
        if (cores[i] >= 128) { cores[i] = cores[i] - cores[i] * 50 / 100} else { cores[i] + cores[i] * 50 / 100} 
    }
    return cores;
}

function pegarcorlateral(valor)
{
    RGBbarras[valor.id-1] = valor.value;
    definircor(RGBbarras[0],RGBbarras[1],RGBbarras[2])
    pegarcor();

}






document.onload = trocarcoraleatorio();