<?php

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    header("location:../../../products.php");
    exit();
}
header("content-type: appliction/json");
require "../../database/Database.php";
require "../../modale/Product.php";

$obj = new Product(new Database);
echo $obj -> del($_POST);
