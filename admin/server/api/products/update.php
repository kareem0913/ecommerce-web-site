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
$obj -> validate();

$count = count($obj -> err);
if ($count == 1) {
    if (array_key_exists('file', $obj -> err)) {
        if ($obj -> err['file'] == 'no file uploaded') {
            $data = new Product(new Database);
            $file = $obj -> imageName;
            echo $data -> update($_POST, $file);
            return;
        }
    }
}else if($obj -> validate()){
    $data = new Product(new Database);
    $file = $obj -> imageName;
    echo $data -> update($_POST, $file);
    return;
}
$error = json_encode($obj -> err);
echo $error;
