<?php
header('Access-Control-Allow-Origin:*');
header('Content-Type:application/json;charset=utf-8');
   @$uname=$_REQUEST['uname'];
   if($uname==""||$uname==null){
    die("用户名不能为空");
  }
   @$gender=$_REQUEST['gender'];
   @$phone=$_REQUEST['phone'];
   if($phone==""||$phone==null){
    die("电话不能为空");
  }
   @$province=$_REQUEST['province'];
   @$city=$_REQUEST['city'];
   @$item=$_REQUEST['item'];
   @$preTime=$_REQUEST[' preTime'];
   @$successTime=$_REQUEST['successTime'];
   require('init.php');
   $sql="INSERT INTO register VALUES (null,'$uname','$gender' ,'$phone', '$province','$city',
 '$item','$preTime','$successTime') ";
   $result=mysqli_query($conn,$sql);
    $row=mysqli_affected_rows($conn);
   if($row>0){
	   echo '{"code":1,"msg":"提交成功，马上为您处理"}';
    
   }else{
       echo '{"code":-1,"msg":"提交失败，请重试"}';
   }