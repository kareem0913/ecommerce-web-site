<?php

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    header("location:../../../../login.html");
    exit();
}

header("content-type: application/json");

require "../../database/Database.php";
require "../../modale/Users.php";


$data = new Users(new Database);


echo $data -> login($_POST);
