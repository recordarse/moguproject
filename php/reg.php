<?php
header('content-type:text/html;charset=utf-8');
define('HOST', 'localhost');
define('USERNAME', 'root');
define('PASSWORD', '');
define('DBNAME', 'registry');
$conn = @new mysqli(HOST, USERNAME, PASSWORD, DBNAME); 
if ($conn->connect_error) {
    die('数据库连接失败：' . $conn->connect_error);
}
$conn->query('SET NAMES UTF8');
//后端获取前端传来的与数据库进行匹配
if(isset($_POST['name'])){
    $name=$_POST['name'];
    $result=$conn->query("select * from regtable where username='$name'");
    if($result->fetch_assoc()){
        echo true;
    }else{
        echo false;
    }
}
  //将前端的写入数据库
  if(isset($_POST['submit'])){
    $user=$_POST['username'];
    $pass=sha1($_POST['password']);
    $telnum=$_POST['tel'];
    $conn->query("insert regtable values('$user','$pass','$telnum')");
    //设置跳转的地址
    header('location:http://10.31.158.34/moguproject/src/login.html');
}