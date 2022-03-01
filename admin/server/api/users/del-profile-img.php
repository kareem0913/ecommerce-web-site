<?php

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    // header("location:../../../tables.php");
    exit();
}

header("content-type: application/json");


require "../../database/Database.php";
require "../../modale/Users.php";

$data = new Users(new Database);


echo $data -> del_profile_img($_POST);
