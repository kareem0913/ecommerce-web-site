<?php

header("content-type: application/json");

require "../../database/Database.php";
require "../../modale/Product.php";

$data = new Product(new Database);
echo $data ->  All_orders();