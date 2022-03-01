<?php


if ($_SERVER["REQUEST_METHOD"] == "GET") {
    header("location:../../../users.php");
    exit();
}
header("content-type: appliction/json");
require "../../database/Database.php";
require "../../modale/Users.php";

$obj = new Users(new Database);
echo $obj -> del($_POST['id']);
