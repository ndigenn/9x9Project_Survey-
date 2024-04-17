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
$q1_false = mysqli_real_escape_string($conn, $_POST['q1-mail']);
$q1_true = mysqli_real_escape_string($conn, $_POST['q1-youth']);
$q2_false = mysqli_real_escape_string($conn, $_POST['q2-7-9']);
$q2_true = mysqli_real_escape_string($conn, $_POST['q2-10-12']);

echo $q1_false;
echo $q1_true;
echo $q2_false;
echo $q2_true;

?>