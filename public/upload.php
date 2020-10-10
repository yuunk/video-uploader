<?php

if (isset($_FILES['video'])) {
    // echo $_FILES['pass_to_fw.mov'];
    // echo 'hoge';
    header("Content-Type: application/json; charset=utf-8");
    echo json_encode($_FILES['video']);
    exit;
} else if (isset($_POST['video'])) {
    echo $_POST;
} else {
    echo 'fail';
}