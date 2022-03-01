<?php

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    header("location:../../../products.php");
    exit();
}

header("content-type: application/json");

require "../../database/Database.php";
require "../../modale/product.php";

$obj = new Product(new Database);
echo $obj -> child_category($_POST['id']);
