<?php

require_once('config.php');

$query = "SELECT * FROM Commenti";
$stmt = mysqli_prepare($link, $query);
mysqli_stmt_execute($stmt);
mysqli_stmt_bind_result($stmt, $ID, $EventiID, $AuthorFirstName, $AuthorLastName, $Body);

$result = [];

while (mysqli_stmt_fetch($stmt)) {
  array_push($result, ["ID" => $ID, "AuthorFullName" => $AuthorFirstName.' '.$AuthorLastName, "Body" => $Body]);
}

mysqli_stmt_close($stmt);

echo json_encode($result);
?>
