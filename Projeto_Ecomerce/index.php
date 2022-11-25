<!DOCTYPE html>
<html lang="br">
<head>
    <!-- Meta     -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!--  Link     -->
    <link rel="stylesheet" href="Componentes HTML/cssprincipal.css">


    <!--  Script     -->
    <?php include 'funcoesphp.php';
    $localservidor = "localhost";
    $usuario = "root";
    $senha = "84374650";
    $bancodados = "pizzaria";
    $conexao = mysqli_connect($localservidor,$usuario,$senha,$bancodados);
    if (!$conexao) {
        die("Falanha na conexao com o banco de dados: " . $conexao->connect_error);
    }



    ?>

    <!--  Titulo     -->
    <title>Ecomerce</title>
</head>

    <?php include_once("Componentes HTML/barranavegacao.html"); ?>

<body>

<container>
    <!-- Tenho que descobrir por que o PHP não carrega o fundo... -->
    <link rel="stylesheet" href="Componentes HTML/menuinicial.css">
    <div class="imagemfundo"></div>

    <div class="textofundoheader">

        <h1 style="font-size:50px">Pizzaria e Cemitério santa Luiza</h1>
        <p>sua tristeza de ontem é a pizza do dia</p>
    </div>
</container>

<separador>
    <h1>Tenho que pensar numa transição melhor...</h1>
</separador>

<!--
   Carrosel de promoções!
-->

<?php include_once("Componentes HTML/carrosel.html"); ?>

<separador>
    <h1>Tenho que pensar numa transição melhor...</h1>
</separador>
<!--
   Cardapio
-->
<container >
    <div id="cardapio" style="background-image: url(https://img.freepik.com/fotos-gratis/conceito-de-madeira-da-textura-do-papel-de-parede-do-fundo-do-material_53876-30425.jpg?t=st=1667952039~exp=1667952639~hmac=f85e5a570db4b222f5f4c6a260c532fb208e605e0ac5ce2e776cc7b16eecc991);">
        <?php
        try {
            $pedidoSQL = "SELECT * FROM pizzas";
            mostrartabela($conexao, $pedidoSQL);
        }catch (Exception $e) {echo "Temos um problema: ".$e;}

        ?>
    </div>



</container>

<separador>
    <h1>Tenho que pensar numa transição melhor...</h1>
</separador>
<!--
    Contatos
-->




<!--
    Modal pizzas ->
-->


<div animacao="aparecer" id="corpomodal" class="">
    <picture id="fotopizzamodal" style="float: right; clear: left">
        <div id="precopizzamodal"></div>
    </picture>
    <h1>NOME PIZZA</h1>
    <div id="nomepizzamodal"></div>
    <h1>INGREDIENTES PIZZA</h1>
    <div id="ingredientespizzamodal"></div>
    <h2>DESCRICAO PIZZA</h2>
    <div id="descricaopizzamodal"></div>

</div>

<div id="fundomodal" onclick="fechar()" class="mostrar"></div>

<script  type="text/javascript">

    const fundo = document.getElementById("fundomodal");
    const corpo = document.getElementById("corpomodal");

    function fechar() {
        fundo.className = "";
        corpo.className = "";
    }

    function abrir(elemento) {
        const nome = elemento.getElementsByTagName("nome")[0];
        const ingredientes = elemento.getElementsByTagName("ingredientes")[0];
        const descricao = elemento.getElementsByTagName("descricao")[0];
        const preco = elemento.getElementsByTagName("preco")[0];
        document.getElementById("nomepizzamodal").innerText = nome.innerText;
        document.getElementById("ingredientespizzamodal").innerText = ingredientes.innerText;
        document.getElementById("descricaopizzamodal").innerText = descricao.innerText;
        document.getElementById("fotopizzamodal").style.backgroundImage = elemento.style.backgroundImage;
        document.getElementById("precopizzamodal").innerText = preco.innerText + " R$";
        fundo.className = "mostrar";
        corpo.className = "mostrar";
    }
</script>


</body>








</html>

















