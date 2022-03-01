<?php
header("content-type: application/json");

require "../../modale/class-check-imageUser.php";
require "../../database/Database.php";
require "../../modale/Administration.php";

$check = new image($_FILES);
if (image::validate()) {
    $_POST['image'] = image::$imageName;
    $obj = new Administration(new Database);
    echo $obj -> edit_profile_image($_POST);
    return true;
}
$error = json_encode(image::$error);
echo $error;
return false;