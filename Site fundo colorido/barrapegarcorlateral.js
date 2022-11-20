var corfundobody = document.getElementById("CORFUNDO");
var textocorfundo = document.getElementById("TEXTOCORFUNDO");
var RGB = [255,0,0];

function pegarcorlateral(valor)
{
    RGB[valor.id-1] = valor.value
    corfundobody.style.background = 'rgb(' + RGB[0] + ',' + RGB[1] + ',' + RGB[2] + ')';
    textocorfundo.innerHTML = 'rgb(' + RGB[0] + ',' + RGB[1] + ',' + RGB[2] + ')';
}


