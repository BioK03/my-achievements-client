<?php

header('Access-Control-Allow-Origin: *'); 

$json = ['id' => 2, 'firstname' => 'Bertrand', 'lastname' => 'Choubert', 'email' => 'bc@gmail.com', 'picture' => 'http://chbe.fr/images/head.png'];


//$json="{id: '2', firstname: 'Bertrand', lastname: 'Choubert', email: 'bc@gmail.com',	picture: 'http://chbe.fr/images/head.png'}";

echo json_encode($json);