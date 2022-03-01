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

if (!empty($_FILES)) {

    $obj = new Cheack($_POST, $_FILES);
    if ($obj -> valimgcat()) {
        $file = $obj -> imageName;
        $_POST['img'] = $file;
        $data = new Product(new Database);
        echo $data -> insert_category($_POST);
        return true;
    }
    $error = json_encode($obj -> err);
    echo $error;
    return false;
}

$name = new Cheack($_POST, $_FILES);
if (!$name -> name()) {
    echo json_encode($name -> err);
    return false;
}
$obj = new Product(new Database);
echo $obj -> insert_category($_POST);
