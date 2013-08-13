<?php 

$db_host = "";

$db_username = ""; 

$db_pass = ""; 

$db_name = "";

// Run the connection here 
mysql_connect("$db_host","$db_username","$db_pass") or die ("could not connect to mysql");

mysql_select_db("$db_name") or die ("no database");
?>
