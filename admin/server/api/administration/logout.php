<?php

// logout admin
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    header("location:http://localhost/ecommerce/admin/index.php");
    exit();
}
session_start();
unset($_SESSION['login_admin']);
