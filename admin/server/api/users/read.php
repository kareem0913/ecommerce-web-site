<?php
session_start();
header("content-type: application/json");

require "../../database/Database.php";
require "../../modale/users.php";

if ($_SESSION['login'] == $_POST['session_user']) {
    $data = new Users(new Database);
    echo $data ->  read($_POST['session_user']);
}
