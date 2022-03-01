<?php

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    header("location:../../../login.html");
    exit();
}

header("content-type: application/json");

require "../../database/Database.php";
require "../../modale/Administration.php";


$obj = new Administration(new Database);


echo $obj -> login($_POST);
