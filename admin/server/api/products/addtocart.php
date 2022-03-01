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


















return;
if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = [];
}

$id = $_POST['id'];

if (in_array($id, $_SESSION['cart'])) {
    echo json_encode([
        'error' => 'this product alredy in cart',
    ]);
}else{

    array_push($_SESSION['cart'], $id);

    if (isset($_POST['count'])) {
        if (!isset($_SESSION['product_info'])) {
            $_SESSION['product_info'] = [];
        }
        array_push($_SESSION['product_info'], $_POST['id'].'=>'. $_POST['count'] );
    }
    // print_r($_SESSION['product_info']);
    echo json_encode([
        'message' => $_SESSION['product_info'],
    ]);
}
// echo ini_set('display_errors', 1);
// in_array($id, $_SESSION['cart']) ? echo 'this product alredy in cart' : array_push($_SESSION['cart'], $id);
