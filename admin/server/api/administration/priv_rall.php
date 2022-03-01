<?php

header("content-type: application/json");

require "../../database/Database.php";
require "../../modale/Administration.php";

$data = new Administration(new Database);

echo $data -> priv_rall();
