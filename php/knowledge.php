<?php
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");
 @$pageSize=$_REQUEST['pageSize'];
 if($pageSize==''||$pageSize==null){
   $pageSize=2;
 }   
 @$pno=$_REQUEST['pno'];
  require('init.php');
   $reg='/^[0-9]{1,}$/';
   $rs=preg_match($reg,$pno);
   if($rs==0){
     die('{"code":-1,"msg":"页码格式不正确"}');
   }
   $rs=preg_match($reg,$pageSize);
   if($rs==0){
     die('{"code":-1,"msg":"页码大小不正确"}');
   }
  $output=[];
  $sql='select count(lid) from  knowledge';
 $result=mysqli_query($conn,$sql);
 $count=mysqli_fetch_row($result)[0];
  $pageCount=ceil($count/$pageSize);
  $offset=($pno-1)*$pageSize;
  $sql="select lid,img,title,detail,time from knowledge limit $offset,$pageSize";
  $result=mysqli_query($conn,$sql);
  $rows=mysqli_fetch_all($result,1);
  $output=['data'=>$rows,'pageCount'=>$pageCount,'pno'=>$pno,'pageSize'=>$pageSize];
  echo json_encode($output);
  