<?php

// logout user
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    header("location:http://localhost/ecommerce/index.php");
    exit();
}
session_start();
unset($_SESSION['login']);
