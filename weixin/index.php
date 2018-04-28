<?php
 header('Access-Control-Allow-Origin:*');  //I have also tried the * wildcard and get the same response
    header("Access-Control-Allow-Credentials: true");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 0');
    header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description,x-requested-with,');
require_once "jssdk.php";
$jssdk = new JSSDK("wx63cdd1941cd86351", "415c4f07bba2d284437db46dd5feba1c");
$signPackage = $jssdk->GetSignPackage();
echo json_encode($signPackage);
?>