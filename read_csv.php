<?php
$file_path = 'stocks\AAPL.csv';
$csv_data = file_get_contents($file_path);
echo $csv_data;
?>
