<?php
    include_once "database.php";
// if ($_FILES['image']['error'] == UPLOAD_ERR_OK) {
    $tmpName = $_FILES['image']['tmp_name'];
    $name = $_FILES['image']['name'];
    $size = $_FILES['image']['size'];
    $type = $_FILES['image']['type'];
    $data = file_get_contents($tmpName);
    echo 'data:' . $type . ';base64,' . base64_encode($data);
    // $uploadDir = 'C:/Users/Republic Of Computer/Documents/projet_python/images/web/';
    $uploadDir = 'C:/xampp/htdocs/payer/uploads/';
    $uploadFile = $uploadDir . basename($name);
    if (move_uploaded_file($tmpName, $uploadFile)) {
        echo 'Image uploaded successfully.';
    } else {
        echo 'Error while uploading image.';
    }
    $tele=$_POST['tele'];
    // Insert $data into MySQL database
    // Return URL of uploaded image
    
    
$sql="INSERT INTO `payer` (`img`, `telephone`) VALUES ('$name', $tele)";
$resul =mysqli_query($conx,$sql);
if ($resul==true) {

    echo "terminer";


}else{
    echo "error";   
} 
//   } else {
//     http_response_code(400);
//   }
// // https://www.youtube.com/watch?v=xErcf1uJdIo&ab_channel=TechWebDocs
// // "php.validate.executablePath": "C:/xampp/php/php.exe"



// //  if(isset($_POST['DT']))


//     $img=$_POST['img'];
//     $tele=$_POST['tele'];

    
// $sql="INSERT INTO `payer` (`img`, `telephone`) VALUES ('$img', $tele)";
// $resul =mysqli_query($conx,$sql);
// if ($resul==true) {

//     echo "terminer";


// }else{
//     echo "error";   
// } 












?>