<?php

session_start();

header("content-type: application/json");

if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = [];
}
$id = $_POST['id'];

foreach ($_SESSION['cart'] as $key => $value) {

    if (in_array($id, array_values($value))) {
        echo json_encode([
            'error' => 'this product alerdy in cart',
        ]);
        // array_replace()
        $_SESSION['cart'][$key] = $_POST;
        return;
    }
}

array_push($_SESSION['cart'], $_POST);
echo json_encode([
    'message' => 'success insert',
]);