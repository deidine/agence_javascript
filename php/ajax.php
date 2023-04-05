<?php

include_once "database.php";
// https://www.youtube.com/watch?v=xErcf1uJdIo&ab_channel=TechWebDocs
// "php.validate.executablePath": "C:/xampp/php/php.exe"



//  if(isset($_POST['DT']))


    $nom=$_POST['nom'];
    $direction=$_POST['direction'];
    $date=$_POST['date'];
    $depart=$_POST['depart'];
    $tele=$_POST['tele'];
    $prix=$_POST['prix'];
    $chaise=$_POST['chaise'];
    $bus_no=$_POST['bus_no'];

    
$sql="INSERT INTO `client` (`nom`, `depart`,  `telephone`, `direction`,  `date`, `payer`, `emploiyer`, `imprimer`,`prix`,numero,bus_no) VALUES ('$nom','$depart', $tele,'$direction','$date','❌','0','✔',$prix,$chaise,'$bus_no')";
$resul =mysqli_query($conx,$sql);
if ($resul==true) {

    echo "terminer";


}else{
    echo "error";   
} 












?>