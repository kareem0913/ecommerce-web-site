<?php
session_start();


$id = $_POST['id'];

foreach ($_SESSION['cart'] as $key => $value) {
    $val = array_search($id, array_values($value));
    if (array_values($value)[$val] == $id) {
        unset($_SESSION['cart'][$key]);
        return;
    }
}
