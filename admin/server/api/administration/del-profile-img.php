<?php

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    // header("location:../../../tables.php");
    exit();
}

header("content-type: application/json");


require "../../database/Database.php";
require "../../modale/Administration.php";

$obj = new Administration(new Database);


echo $obj -> del_profile_img($_POST);
