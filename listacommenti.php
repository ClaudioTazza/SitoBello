<?php

require_once('config.php');

$result = array();

// check $evId
$evId = $_GET['evId'];

$query = "SELECT * FROM `Eventi` WHERE ID='$evId'";
$stmt = mysqli_prepare($link, $query);
mysqli_stmt_execute($stmt);
mysqli_stmt_bind_result($stmt, $ID, $Nome, $Luogo, $Data);
mysqli_stmt_fetch($stmt);
array_push($result, array("ID" => $ID, "Nome" => $Nome, "Luogo" => $Luogo, "Data" => $Data));
mysqli_stmt_close($stmt);

$query = "SELECT * FROM Commenti WHERE EventiId=".$evId;
$stmt = mysqli_prepare($link, $query);
mysqli_stmt_execute($stmt);
mysqli_stmt_bind_result($stmt, $ID, $EventiID, $AuthorFirstName, $AuthorLastName, $Body);
while (mysqli_stmt_fetch($stmt)) {
  array_push($result, array("ID" => $ID, "AuthorFullName" => $AuthorFirstName.' '.$AuthorLastName, "Body" => $Body));
}
mysqli_stmt_close($stmt);

echo json_encode($result);
?>
