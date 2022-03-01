<?php

header("content-type: application/json");

require "../../database/Database.php";
require "../../modale/Product.php";

$data = new Product(new Database);

$id = $_POST['id'];

echo $data -> product_one_category($id);
