<?php

include_once "database.php";
// https://www.youtube.com/watch?v=xErcf1uJdIo&ab_channel=TechWebDocs
// "php.validate.executablePath": "C:/xampp/php/php.exe"



//  if(isset($_POST['DT']))


$id_client = $_POST['id_client'];

$chaise = $_POST['chaise'];
$bus = $_POST['bus_no'];
$date = date('Y-m-d');
$sql = "UPDATE client set `numero`=$chaise,  `bus_no`='$bus' where CURRENT_DATE()=date and  telephone=$id_client";
$resul = mysqli_query($conx, $sql);
if ($resul == true) {

    echo "terminer";
} else {
    echo "error";
}
