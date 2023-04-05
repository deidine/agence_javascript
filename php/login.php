
<?php

include "database.php";
session_start();
if(isset($_POST['login'])){
    $user=stripslashes($_POST['username']);
    $pass=stripslashes($_POST['password']);
    
    $user = mysqli_real_escape_string($conx,$user);
    $pass = mysqli_real_escape_string($conx,$pass);
    
    $sql="SELECT * FROM login WHERE username='$user' AND password='$pass' ";
    #echo "<b style='color:red'>$sql</b>";
    
    
    $res=mysqli_query($conx,$sql);
    
    if($row=mysqli_fetch_assoc($res)){
     $_SESSION['username']=$user;
     
     $row2[]=$row;
     
    }
    if(!empty($row2)){
        $result['type'] = "success";
    header("Location: ../payer/admin/index.html"); // Redirect user to index.php
    $result['result'] = $row2;
    }else{
    $result['type'] = "error";
    header("Location: ../index.html"); // Redirect user to index.php
    $result['result'] = "No result found";

    }

    echo json_encode($row2);
 
}?>
