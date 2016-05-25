<?php
date_default_timezone_set("Asia/Shanghai");
$comments = file_get_contents('test.json');
if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $commentsDecoded = json_decode($comments, true);
    $commentsDecoded[] = [
        'id'      => round(microtime(true)*1000),
        'author'  => $_POST['author'],
        'date'    => date("Y-m-d h:i"),
        'text'    => $_POST['text']
    ];
    $comments = json_encode($commentsDecoded, JSON_PRETTY_PRINT);
    file_put_contents('test.json', $comments);
}
echo $comments;
/**
 * Created by PhpStorm.
 * User: Muc
 * Date: 16/5/17
 * Time: 16:36
 */