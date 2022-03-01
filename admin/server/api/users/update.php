<?php

header("content-type: application/json");


$array = array_keys($_FILES);
if ($_FILES[$array[0]]['error'] == 0) {
    require "../../modale/class-check-imageUser.php";
    require "../../database/Database.php";
    require "../../modale/users.php";

    $check = new image($_FILES);
    if (image::validate()) {
        $_POST['image'] = image::$imageName;
        $data = new Users(new Database);
        echo $data -> update($_POST);
        return true;
    }
    $error = json_encode(image::$error);
    echo $error;
    return false;
}

require "../../database/Database.php";
require "../../modale/users.php";

$obj = new Users(new Database);

echo $obj -> update($_POST);
