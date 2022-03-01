<?php

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    header("location:../../../tables.php");
    exit();
}

header("content-type: application/json");

require "../../database/Database.php";
require "../../modale/Administration.php";

$data = new Administration(new Database);

echo $data -> update($_POST);
