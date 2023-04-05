<?php
include_once "database.php";



    $bus=$_POST['bus_no'];
    $seat=$_POST['seat_booked'];

  $sql=  "UPDATE `seats` SET `seat_booked` = '$seat' WHERE `bus_no` = '$bus'";
$resul =mysqli_query($conx,$sql);
if ($resul==true) {

    echo "<h2>updated.....!</h2>";
    # code...
}else{
    echo "<h2>dont updated.....!</h2>";   
}
    # code...
?>