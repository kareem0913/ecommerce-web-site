<?php

header("content-type: application/json");

require "../../database/Database.php";
require "../../modale/product.php";

$obj = new Product(new Database);
echo $obj -> sold_order($_POST['id']);