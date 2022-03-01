<?php

header("content-type: application/json");

require "../../database/Database.php";
require "../../modale/Administration.php";

$obj = new Administration(new Database);
echo $obj -> dashboard_info();
