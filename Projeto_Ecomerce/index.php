<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="cssprincipal.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Ecomerce</title>
</head>

<div>

</div>

<body>

        <header>
        
                <div class="imagemfundo"></div>
                
                <div class="textofundo">
                  
                  <h1 style="font-size:50px">Pizzaria e Cemitério santa Luiza</h1>
                  <p>sua tristeza de ontem é a pizza do dia</p>
                </div>
        </header>
    
        <!--  Começa o site.     -->

    
    <?php
    
    $banco = new mysqli("localhost","root","","pizzaria_bancodados");
    $sql = "SELECT * FROM pizzas WHERE 1=1 ";
    $result = mysqli_query($banco, $sql);
        if(mysqli_num_rows($result)>0) {
            while($row = mysqli_fetch_assoc($result)) { // echoar o resultado para cada item!



    echo('




        <container>
            <div class="caixalateralinteira cardapio afastadoborda">

            <div class="itemcardapio" style="background-image: url(../../icone.jpg);">
                <div class="vidrocardapio">
                    <h1>$nomepizza</h1>
                </div>   
            </div>
        </div>
    
        </container>
    
    
    
    ');
    ?>

    

    <container>
        <div>
            aqui teremos as promoções da pizzaria
        </div>
    </container>

    <footer>
        <container>
            <div>
                
                aqui teremos os contatos para a pizzaria.
            
            </div>

        </container>
    </footer>

</body>








</html>