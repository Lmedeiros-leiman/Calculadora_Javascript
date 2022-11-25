<?php
//redireciona para página inicial caso não esteja no index.php
function forapagina()
{
    $url= $_SERVER['REQUEST_URI']; //mostra o caminho na pasta;

    $url = explode("/",$url);
    $url = $url[sizeof($url)-1];
    if ($url != 'index.php') {
        return false;
    }
    return true;
}
if (!forapagina()) {
    echo "Redirecionado...";
    header('Location: index.php');
}

// Script continua como padrão...

function mostrartabela($conexao,$pedidoSQL){

    if ($resultado = mysqli_query($conexao,$pedidoSQL)){
        while ($dados = mysqli_fetch_array($resultado)) {
            echo'
                    <div class="item" onclick="abrir(this)"  style="background-image: url('.$dados["caminho_imagem"].');">
                    <nome style="display: none;">'.$dados["sabor"].'.</nome>
                    <ingredientes style="display: none;">'.$dados["ingredientes"].'</ingredientes>
                    <descricao style="display: none;">'.$dados["descricao"].'</descricao>
                    <preco style="display: none">'.$dados["preco"].'</preco>
                    <div class="vidrocardapio">
                        <h1>'.$dados["nome"].'</h1>
                    </div>
                    </div>
            ';
        }
    }else{
        echo "
    <erro> 
        Pizzas não foram carregadas, possivel erro no banco de dados 
    </erro>";
    }

}





?>