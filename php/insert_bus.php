<?php

include_once "database.php";
// https://www.youtube.com/watch?v=xErcf1uJdIo&ab_channel=TechWebDocs
// "php.validate.executablePath": "C:/xampp/php/php.exe"



//  if(isset($_POST['DT']))

   
    $chaise=$_POST['seat_booked'];
    $bus=$_POST['bus_no'];
    $date =date('Y-m-d');
$sql="INSERT INTO `seats` ( `bus_no`, `seat_booked`) VALUES ( '$bus', '$chaise')";
$resul =mysqli_query($conx,$sql);
if ($resul==true) {

    echo "terminer";


}else{
    echo "error";   
} 












?>