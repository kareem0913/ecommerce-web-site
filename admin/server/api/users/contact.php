<?php

header("content-type: application/json");
require "../../database/Database.php";
require "../../modale/Users.php";

$obj = new Users(new Database);
echo $obj -> contact($_POST);
