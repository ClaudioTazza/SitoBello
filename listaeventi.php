<?php

require_once('config.php');

$query = "SELECT * FROM Eventi";
$stmt = mysqli_prepare($link, $query);
mysqli_stmt_execute($stmt);
mysqli_stmt_bind_result($stmt, $ID, $Nome, $Luogo, $Data);

$result = [];

while (mysqli_stmt_fetch($stmt)) {
  array_push($result, ["ID" => $ID, "Nome" => $Nome, "Luogo" => $Luogo, "Data" => $Data]);
}

mysqli_stmt_close($stmt);

echo json_encode($result);
?>
