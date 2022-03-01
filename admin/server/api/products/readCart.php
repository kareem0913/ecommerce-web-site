<?php
session_start();
header("content-type:application/json");

require "../../database/Database.php";
require "../../modale/Product.php";


if (isset($_SESSION['cart'])) {
    $obj = new Product(new Database);
    echo $obj -> readCart($_SESSION['cart']);
}else{
    echo json_encode([
        'message' => 'no product in cart'
    ]);
}
