<?php

if (isset($_FILES['video'])) {

    $file = $_FILES['video']['tmp_name'];
    $fileName = './video/' . $_FILES['video']['name'];
    $result = '';

    if (is_uploaded_file($file)) {

        if ( move_uploaded_file($file, $fileName)) {
            $result = 'sucess';
        } else {
            $result = 'fail upload';
        }

    } else {
        $result = 'fail file';
    }

    header("Content-Type: application/json; charset=utf-8");
    echo json_encode($result);
    exit;

} else if (isset($_POST['video'])) {
    echo $_POST;
} else {
    echo 'fail';
}