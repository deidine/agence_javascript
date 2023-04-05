<?php

include_once "database.php";
// https://www.youtube.com/watch?v=xErcf1uJdIo&ab_channel=TechWebDocs
// "php.validate.executablePath": "C:/xampp/php/php.exe"



//  if(isset($_POST['DT']))


$sql="UPDATE seats set `seat_booked`='1'";
$resul =mysqli_query($conx,$sql);
if ($resul==true) {

    header("Location: index.html"); // Redirect user to index.php



}else{
    echo "error";   
} 












?>