<?php

header("content-type:application/json");

require "../../database/Database.php";
require "../../modale/Product.php";

// echo json_encode($_POST);
// return;
$obj = new Product(new Database);

echo $obj -> insert_sales($_POST);
