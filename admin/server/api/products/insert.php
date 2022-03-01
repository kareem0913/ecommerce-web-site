<?php

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    header("location:../../../products.php");
    exit();
}
header("content-type: application/json");


require "../../modale/trait_cheack_image&file.php";
require "../../modale/cheack_product_data.php";
require "../../database/Database.php";
require "../../modale/Product.php";


$obj = new Cheack($_POST, $_FILES);
if ($obj -> validate()) {
    $data = new Product(new Database);
    $file = $obj -> imageName;
    echo $data -> insert($_POST, $file);
    return true;
}
$error = json_encode($obj -> err);
echo $error;
