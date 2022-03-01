<?php


header("content-type: application/json");

require "../../database/Database.php";
require "../../modale/product.php";

$obj = new Product(new Database);

echo $obj -> insert_comment($_POST);
