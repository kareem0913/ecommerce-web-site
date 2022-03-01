<?php


header("content-type:application/json");

require "../../database/Database.php";
require "../../modale/Product.php";

$obj = new Product(new Database);

echo $obj -> top();