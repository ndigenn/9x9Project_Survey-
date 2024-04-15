<?php 

// Database connection details
$host = 'localhost';
$user = 'u320299981_admin';
$d_password = 'gR*9=i^gLGGN';
$database = 'u320299981_puzzles';

// Create a database connection
$conn = new mysqli($host, $user, $d_password, $database);

// Check the connection and report errors
if ($conn->connect_error) {
    http_response_code(500);
    die(json_encode(['success' => false, 'message' => ('Database connection failed: ' . mysqli_connect_error())]));
}

// Retrieve data from the form
$q1 = mysqli_real_escape_string($conn, $_POST['q1']);
$q2 = mysqli_real_escape_string($conn, $_POST['q2']);

echo $q1;
echo $q2;

?>