//
// Primeira etapa : Pseudocódigo.
//

entradacamera = camera;
entradaarquivo = arquivo;

imagens.aoentrar(fontedeimagem)
{
    imagem = fontedeimagem.imagem
    imagem.tamanho[largura, altura] = ajustardimensoes();
    canvas.escrever(fontedeimagem);

    imagemfinal = imagemtextualizada(acizentarimagem(fontedeimagem));
}

function ajustardimensoes(largura,altura)
{

    const altura_maxima = 10;
    const largura_maxima = 10;

    var larguraajustada = Math.floor(tamanhofonte * largura);
    //var larguraajustada = largura;
    if (altura > altura_maxima) 
    {
        var largurareduzida = Math.floor(larguraajustada * altura_maxima / altura);
        return [largurareduzida, altura_maxima];
    }

    if (largura > largura_maxima) 
    {
        var alturareduzida = Math.floor(altura * largura_maxima / larguraajustada);
        return [largura_maxima, alturareduzida];
    }

    return[larguraajustada,altura];
};

function acizentarimagem(imagem) 
{
    pixeis = imagem.pixeis;
    paracadapixel(X)
    {
        r = pixel[X].vermelho
        g = pixel[X].verde
        b = pixel[X].azul
        pixeiscinzas[X] = (r + g + b) / 3
        
    }
    imagem.pixeis[] = pixeiscinzas[]
}

function textualizarimagem(imagemcinza)
{
    pixeis = imagem.pixeis
    paracadapixel(X)
    {
        

    }

}