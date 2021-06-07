<?php

// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");

function respond($code, $response)
{
    header("Content-Type:application/json");
    http_response_code($code);
    echo (is_array($response) ? json_encode($response) : $response);
    exit(0);
}

function getDb()
{
    $con = mysqli_connect("localhost", "mavenjan21", "genius4good", "OTP_event");
    if (mysqli_connect_errno()) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
        exit(0);
    }
    return $con;
}

if ($json = json_decode(file_get_contents("php://input"), true))
    $request = $json;
else if ($_POST)
    $request = $_POST;
else if ($_GET)
    $request = $_GET;
$log = strftime('%Y-%m-%d');
$time = strftime('%H:%M:%S');

try {
    $db = getDb();
    if (stripos($_SERVER['REQUEST_URI'], '/bulkInsert') !== false) {
        $movies = $request['values'];
        if ($movies) {
            foreach ($movies as $key => $value) {
            echo "$key => $value\n"; 
            // $sql = "INSERT INTO OTP_event.Movies (status, transaction_id, amount, accountid)
            // VALUES ('$status','$transaction_id', '$amount', '$accountid')";
            // $db->query($sql);
            // if ($db->errno)
            //     respond(500, array('success' => false, 'message' => 'db error: ' . $db->error));
            // respond(200, array('success' => false, 'message' => $worksheetcode));
        }
        } else {
            respond(400, array('success' => false, 'error' => 'file not found'));
        }
    } else
        respond(400, array('success' => false, 'error' => 'resource or endpoint not found'));
} catch (Exception $e) {
    try {
        $entry = ['time' => $time, 'request' => $request, 'error' => json_encode($e)];
        $fp = file_put_contents('logs/' . $log . '.txt', json_encode($entry, JSON_PRETTY_PRINT), FILE_APPEND);
        respond(500, array('success' => false, 'error' => $e->getMessage()));
    } catch (Exception $ex) {
        respond(500, array('success' => false, 'error' => $e->getMessage() . '|' . $ex->getMessage()));
    }
} finally {
    if ($db)
        $db->close();
}
