<?php

header("content-type: application/json");

require "../../database/Database.php";
require "../../modale/Product.php";

$data = new Product(new Database);

$array = [];

$product = $data -> readAll();
$category = $data -> allcat();



echo json_encode([
    'product' => $product,
    'category' => $category,
]);
