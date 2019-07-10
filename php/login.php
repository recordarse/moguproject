<?php
header('content-type:text/html;charset=utf-8');
define('HOST', 'localhost');
define('USERNAME', 'root');
define('PASSWORD', '');
define('DBNAME', 'registry');
$conn = @new mysqli(HOST, USERNAME, PASSWORD, DBNAME); //@:容错的
if ($conn->connect_error) {
    die('数据库连接失败：' . $conn->connect_error);
}
$conn->query('SET NAMES UTF8');

if(isset($_GET['name']) && isset($_GET['pass'])&& isset($_GET['tel'])){
    $user=$_GET['name'];
    $pass=sha1($_GET['pass']);
    $tel=$_GET['tel'];
    $result=$conn->query("select * from regtable where username='$user' and password='$pass' and tel='$tel'");

    if($result->fetch_assoc()){//登录成功
        echo true;
    }else{//登录失败
        echo false;
    }

}