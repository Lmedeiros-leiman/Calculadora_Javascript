var pausado = true;
var i = 0;

function timedCount() {
  i = i + 1;
  postMessage(i);
  setTimeout("timedCount()",500);
}

function checarestado() {
    if (pausado == false) {
        timedCount();
    }
    else 
    {
        setTimeout(cochilar(500),0);
    }
}

self.onmessage = function(event) {
    console.log("Message from parent:", event.data); // "Sample message"
}


self.addEventListener("message", function(event) {
   
    var mensagem = event.data;
    if (mensagem == "pausar") {pausado = true;}
    if (mensagem == "continuar") {pausado = false;}
    checarestado();
});

function cochilar(tempomilisegundos) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > tempomilisegundos)
      {
        break;
      }
    }
  }
  onload = checarestado();


